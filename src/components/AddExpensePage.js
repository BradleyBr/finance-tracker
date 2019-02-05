import React from 'react'
import { connect } from 'react-redux'
import { addExpense, startAddExpense } from '../actions/expense'
import moment from 'moment'


const uuidv4 = require('uuid/v4')
class ExpensePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {expenseType: '',
                    expenseDescription: '',
                    expenseAmount: '',
                    createdAt: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleAmountChange = this.handleAmountChange.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const now = moment().format('DD/MM/YYYY')
        this.setState({createdAt: now.toString()}, () => {
        this.props.startAddExpense(this.state)
        this.props.history.push('/expenselist')
        })
      
    }
    handleChange(e) {
        this.setState({expenseType: e.target.value})
    }
    handleDescriptionChange(e) {
        this.setState({expenseDescription: e.target.value})
    }
    handleAmountChange(e) {
        this.setState({expenseAmount: e.target.value})
    }
    render() {
        return (
            <div>
                <form>
                    <select onChange={this.handleChange}>
                        <option hidden selected disabled>type of expense</option>
                        <option value="Rent/Mortgage">Rent/Mortgage</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                    <input placeholder="description" onChange={this.handleDescriptionChange} />
                    <input placeholder="amount" onChange={this.handleAmountChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense : (expense) => dispatch(addExpense(expense)),
    startAddExpense: (expense) => dispatch(startAddExpense(expense)) 
})

export default connect(undefined, mapDispatchToProps)(ExpensePage)