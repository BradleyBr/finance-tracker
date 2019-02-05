import React from 'react'
import { connect } from 'react-redux'
import { startRemoveExpense } from '../actions/expense'
import { startRemoveIncome} from '../actions/income'

const DashboardPage = (props) => (
    <div>
        <div>
            {props.expense.map((expense) => (
                <div key={expense.id}>
                    <p>Type of expense: {expense.expenseType}</p>
                    {expense.expenseDescription.length > 0 ?
                    <p>{expense.expenseDescription}</p> : null}
                    <p>Amount: {expense.expenseAmount}</p>
                    <button onClick={
                        () => {
                            props.startRemoveExpense(expense)
                        }
                    }>Remove Expense</button>
                </div>
            ))}
        </div>
        <div>
            {props.income.map((income) => (
                <div key={income.id}>
                    <p>Income Description: {income.incomeDescription}</p>
                    <p>Income Amount: {income.incomeAmount}</p>
                    <button onClick={
                        () => {
                            props.startRemoveIncome(income)
                        }
                    }>Remove Income</button>
                </div>
            ))}
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    expense: state.expense,
    income: state.income
})
const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense.id)),
    startRemoveIncome: (income) => dispatch(startRemoveIncome(income.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)