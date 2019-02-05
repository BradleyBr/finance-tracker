import React from 'react'
import { connect } from 'react-redux'
import { startRemoveIncome } from '../actions/income'

class IncomeList extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                 <div>
                    {this.props.income.map((income) => (
                        <div key={income.id}>
                            <p>Income Description: {income.incomeDescription}</p>
                            <p>Income Amount: {income.incomeAmount}</p>
                            <button onClick={() => {
                                this.props.startRemoveIncome(income)
                            }}>Remove Income</button>
                        </div>
                    ))}
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