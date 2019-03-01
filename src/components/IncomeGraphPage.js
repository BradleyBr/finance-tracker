import React from 'react'
import { connect } from 'react-redux';
import CanvasJS from '../../canvasJS/canvasjs.min'

class IncomeGraphPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            check: false,
            expense: [],
            income: []
        }
    }

    componentDidMount() {
        this.setState({income: this.props.income}, () => {
            console.log(this.state.income)
        })
        const expense = this.props.expense
        const income = this.props.income
        const arraySum = item => item.reduce((a, b) => a + b, 0)
        const expenseSum = arraySum(expense.map((item) => {
            return parseFloat(item.expenseAmount)
        }))
        const incomeSum = arraySum(income.map((item) => {
            return parseFloat(item.incomeAmount)
        }))
        const netIncome = incomeSum - expenseSum
        let dpsExpense = []
        let dpsIncome = []
        expenseSum > 0 ? dpsExpense.push({y: expenseSum, label: 'Expenses'}) : undefined
        if (dpsExpense.length > 0 && incomeSum < expenseSum) {
            dpsExpense.push({y: incomeSum, label: 'Expenses'})
        } else if (dpsExpense.length > 0 && incomeSum >= expenseSum) {
            dpsExpense.push({y: expenseSum, label: 'Income'})
        }
        if (income.length > 0) {
            this.setState(prevState => ({check: !prevState.check}), () => {
                let chart = new CanvasJS.Chart("incomeContainer", {
                    animationEnabled: false,
                    title:{
                      text: "Income compared to Expenses"
                    },
                    data: [{
                        click: function(e) {
                            // if (e.dataPoint.label === 'Rent/Mortgage') {
                            //     console.log(that.props.history.push('/expenselist'))
                            // }
                            console.log(e)
                        },
                        type: "stackedColumn",
                        dataPoints: [{ y: expenseSum, label: 'Expenses' },
                        { y: incomeSum < expenseSum ? incomeSum : expenseSum , label: 'Income'  }]
                    },
                    {
                        type: "stackedColumn",
                        dataPoints: [{},
                            incomeSum < expenseSum ? {} : { y: netIncome, label: 'Net Income' }]
                    }]
                     
                });
                chart.render()
            })
        } else {
            this.setState({check: false})
        }    
    }
    render() {
        return (
            <div>
                {this.state.check ? <div id="incomeContainer" style={{height: 360 + "px", width: 50 + "%"}}></div> :
                <div>No income yet!</div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(IncomeGraphPage)