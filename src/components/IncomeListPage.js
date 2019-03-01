import React from 'react'
import { connect } from 'react-redux'
import { startRemoveIncome } from '../actions/income'
import ArchivedIncomeList from './archived-data-income/ArchivedIncomeList'
import AddIncomePage from './AddIncomePage'

class IncomeList extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="income-list-container">
                <AddIncomePage />
                 <div className="income-list-container__data">
                    {this.props.income.map((income) => (
                        <div key={income.id}>
                            <p>Income Description: {income.incomeDescription}</p>
                            <p>Income Amount: {income.incomeAmount}</p>
                            <p>Date: {income.createdAt}</p>
                            <button onClick={() => {
                                this.props.startRemoveIncome(income)
                            }}>Remove Income</button>
                        </div>
                    ))}
                </div>
                <ArchivedIncomeList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    income: state.income
})
const mapDispatchToProps = (dispatch) => ({
    startRemoveIncome: (income) => dispatch(startRemoveIncome(income.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(IncomeList)