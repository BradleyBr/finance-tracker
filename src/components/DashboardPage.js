import React from 'react'
import { connect } from 'react-redux'
import { startRemoveExpense } from '../actions/expense'
import { startRemoveIncome} from '../actions/income'
import ExpenseGraphPage from './ExpenseGraphPage'
import IncomeGraphPage from './IncomeGraphPage'

const DashboardPage = (props) => (
    // <div>
    //     <ExpenseGraphPage history={props.history}/>
    //     <IncomeGraphPage history={props.history} income={props.income} expense={props.expense} />
    // </div>
    <div>hi!</div>
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