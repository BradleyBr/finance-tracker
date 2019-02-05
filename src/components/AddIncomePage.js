import React from 'react'
import { connect } from 'react-redux'
import { startAddIncome } from '../actions/income'


class AddIncome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                incomeDescription: '',
                incomeAmount: ''
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
        this.props.startAddIncome(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder="Income description" onChange={this.onDescriptionChange} />
                    <input placeholder="Income Amount" onChange={this.onAmountChange} />
                    <button onClick={this.onSubmit}>Submit income</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddIncome: (income) => dispatch(startAddIncome(income))
})

export default connect(undefined, mapDispatchToProps)(AddIncome)