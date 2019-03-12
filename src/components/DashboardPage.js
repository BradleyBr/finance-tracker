import React from 'react'
import { connect } from 'react-redux'
import { startRemoveExpense } from '../actions/expense'
import { startRemoveIncome} from '../actions/income'


class DashboardPage extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const expense = this.props.expense
        const income = this.props.income
        const arraySum = item => item.reduce((a, b) => a + b, 0)
        const expenseSum = arraySum(expense.map((item) => {
            return parseFloat(item.expenseAmount)
        }))
        const incomeSum = arraySum(income.map((item) => {
            return parseFloat(item.incomeAmount)
        }))
        let expenseData = {
            housing: expense.filter((item) => item.expenseType === "Rent/Mortgage"),
            grocery: expense.filter((item) => item.expenseType === "Grocery"),
            entertainment: expense.filter((item) => item.expenseType === "Entertainment"),
            vehicle: expense.filter((item) => item.expenseType === "Vehicle"),
            restaurant: expense.filter((item) => item.expenseType === "Restaurant"),
            misc: expense.filter((item) => item.expenseType === "Misc")
        }
        let { housingSum, grocerySum, entertainmentSum, vehicleSum, restaurantSum, miscSum } = {
            housingSum: arraySum(expenseData.housing.map((item) => parseFloat(item.expenseAmount))),
            grocerySum: arraySum(expenseData.grocery.map((item) => parseFloat(item.expenseAmount))),
            entertainmentSum: arraySum(expenseData.entertainment.map((item) => parseFloat(item.expenseAmount))),
            vehicleSum: arraySum(expenseData.vehicle.map((item) => parseFloat(item.expenseAmount))),
            restaurantSum: arraySum(expenseData.restaurant.map((item) => parseFloat(item.expenseAmount))),
            miscSum: arraySum(expenseData.misc.map((item) => parseFloat(item.expenseAmount)))
        }
        return (
            <div>
                <div className="dashboard-expense-container">
                    <h3>Summary of monthly expenses</h3>
                    {expenseSum > 0 ? 
                        <div className="dashboard-expense-container__data">
                            {housingSum > 0 ? 
                            <div className="dashboard-expense-container__data--flex">
                                <p>Rent/Mortgage</p>
                                <p>{housingSum}</p>
                            </div> : null}
                            {grocerySum > 0 ?
                                <div className="dashboard-expense-container__data--flex">
                                    <p>Grocery</p>
                                    <p>{grocerySum}</p>
                                </div> : null}
                            {entertainmentSum > 0 ?
                                <div className="dashboard-expense-container__data--flex">
                                    <p>Entertainment</p>
                                    <p>{entertainmentSum}</p>
                                </div> : null}
                            {vehicleSum > 0 ?
                                <div className="dashboard-expense-container__data--flex">
                                    <p>Vehicle</p>
                                    <p>{vehicleSum}</p>
                                </div> : null}
                            {restaurantSum > 0 ?
                                <div className="dashboard-expense-container__data--flex">
                                    <p>Restaurant</p>
                                    <p>{restaurantSum}</p>
                                </div> : null}
                            {miscSum > 0 ?
                                <div className="dashboard-expense-container__data--flex">
                                    <p>Misc</p>
                                    <p>{miscSum}</p>
                                </div> : null}
                            <div className="dashboard-expense-container__data--flex">
                                <p>total</p>
                                <p className="dashboard-expense-container__data--total">{expenseSum}</p>
                            </div>
                            
                        </div> : <p>No expense data yet</p>}
                </div>
                <div className="dashboard-income-container">
                    <h3>Comparison of income to expenses on the month</h3>
                    {incomeSum > 0 ? 
                        <div className="dashboard-income-container__data">
                            <div className="dashboard-income-container__data--flex">
                                <p>Total income</p>
                                <p>{incomeSum}</p>
                            </div>
                            <div className="dashboard-income-container__data--flex">
                                <p>Income minus expenses</p>
                                <p className="dashboard-income-container__data--total">{incomeSum - expenseSum}</p>
                            </div>
                        </div> : <p>No income data to compare</p>}
                </div>
        </div>
        )
    }
}

// const DashboardPage = (props) => (
//     <div>
//         <ExpenseGraphPage history={props.history}/>
//         <IncomeGraphPage history={props.history} income={props.income} expense={props.expense} />
//     </div>
    
// )

const mapStateToProps = (state) => ({
    expense: state.expense,
    income: state.income
})
const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense.id)),
    startRemoveIncome: (income) => dispatch(startRemoveIncome(income.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)