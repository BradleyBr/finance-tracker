import React from 'react'
import { connect } from 'react-redux'
import { startAddIncome } from '../actions/income'
import moment from 'moment'


class AddIncome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                incomeDescription: '',
                incomeAmount: '',
                createdAt: ''
            }

        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
 
    onDescriptionChange(e) {
        this.setState({incomeDescription: e.target.value})
    }
    onAmountChange(e) {
        this.setState({incomeAmount: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()
        const now = moment().format('DD/MM/YYYY')
        this.setState({createdAt: now.toString()}, () => {
            this.props.startAddIncome(this.state)
        })
        
    }

    render() {
        return (
            <div className="income-list-form">
                <p>Enter your income here, the information will be added to your monthly record</p>
                <form className="income-list-form__inputs">
                    <input placeholder="Income description" onChange={this.onDescriptionChange} />
                    <input placeholder="Income Amount" onChange={this.onAmountChange} />
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddIncome: (income) => dispatch(startAddIncome(income))
})

export default connect(undefined, mapDispatchToProps)(AddIncome)