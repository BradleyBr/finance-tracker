import React from 'react'
import { connect } from 'react-redux'
import { startRemoveExpense } from '../actions/expense'
import AddExpensePage from './AddExpensePage'
import ArchivedExpenseList from './archived-data-expenses/ArchivedExpenseList'

class ExpenseList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="expense-list-container">
                <AddExpensePage />
               <div className="expense-list-container__data">
                    <div className="expense-list-container__data__header">
                        <p>Type of Expense</p>
                        <p>Memo</p>
                        <p>Value</p>
                        <p>Date Entered</p>
                    </div>
                    {this.props.expense.length > 0 ? this.props.expense.map((expense) => (
                        <div key={expense.id} className="expense-list-container__data__body">
                            <p>{expense.expenseType}</p>
                            {expense.expenseDescription.length > 0 ?
                            <p>{expense.expenseDescription}</p> : null}
                            <p>{expense.expenseAmount}</p>
                            <p>{expense.createdAt}</p>
                            <button onClick={() => {
                                this.props.startRemoveExpense(expense)
                            }}>Remove</button>
                        </div>
                    )) : <p className="expense-list-container__data__body--empty">Nothing to display, add some expenses!</p>}
                </div>
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