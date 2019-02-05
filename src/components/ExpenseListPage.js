import React from 'react'
import { connect } from 'react-redux'
import { startRemoveExpense } from '../actions/expense'

class ExpenseList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
               <div>
                    {this.props.expense.map((expense) => (
                        <div key={expense.id}>
                            <p>Type of expense: {expense.expenseType}</p>
                            {expense.expenseDescription.length > 0 ?
                            <p>{expense.expenseDescription}</p> : null}
                            <p>Amount: {expense.expenseAmount}</p>
                            <p>Date: {expense.createdAt}</p>
                            <button onClick={() => {
                                this.props.startRemoveExpense(expense)
                            }}>Remove Expense</button>
                        </div>
                    ))}
                </div>
                <p>hi!</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense
})
const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList)