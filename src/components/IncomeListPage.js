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
                    <div className="income-list-container__header">
                    <p>Memo</p>
                    <p>Value</p>
                    <p>Date Entered</p>
                    </div>
                    {this.props.income.length > 0 ? this.props.income.map((income) => (
                        <div key={income.id} className="income-list-container__data__body">
                            <p>{income.incomeDescription}</p>
                            <p>{income.incomeAmount}</p>
                            <p>{income.createdAt}</p>
                            <button onClick={() => {
                                this.props.startRemoveIncome(income)
                            }}>Remove</button>
                        </div>
                    )) : <p className="income-list-container__data--empty">Nothing to display, add some income!</p>}
                </div>
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