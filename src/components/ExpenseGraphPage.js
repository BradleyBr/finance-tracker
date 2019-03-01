import React from 'react'
import { connect } from 'react-redux'
import CanvasJS from '../../canvasJS/canvasjs.min'

class ExpenseGraphPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
    }

    componentDidMount() {
        const that = this
        const expense = that.props.expense
        const arraySum = item => item.reduce((a, b) => a + b, 0)
        let dps = []

        // This section collects the data from the expense array and organizes it by type into an object, and gives the sum of each type
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
        housingSum > 0 ? dps.push({ y: housingSum, label: "Rent/Mortgage" }) : undefined
        grocerySum > 0 ? dps.push({ y: grocerySum, label: "Grocery" }) : undefined
        entertainmentSum > 0 ? dps.push({ y: entertainmentSum, label: "Entertainment" }) : undefined
        vehicleSum > 0 ? dps.push({ y: vehicleSum, label: "Vehicle" }) : undefined
        restaurantSum > 0 ? dps.push({ y: restaurantSum, label: "Restaurant" }) : undefined
        miscSum > 0 ? dps.push({ y: miscSum, label: "Misc" }) : undefined
        
        //this is for letting the page not attempt to render graph data if there is none
        if (dps.length > 0) {
            this.setState(prevState => ({
                check: !prevState.check
            }), () => {
                let chart = new CanvasJS.Chart("expenseContainer", {
                    animationEnabled: false,
                    title:{
                      text: "Expenses"
                    },
                    
                    data: [{
                        click: function(e) {
                            // if (e.dataPoint.label === 'Rent/Mortgage') {
                            //     console.log(that.props.history.push('/expenselist'))
                            // }
                            console.log(e)
                        },
                        explodeOnClick: false,
                        type: "pie",
                        startAngle: 60,
                        //innerRadius: 60,
                        indexLabelFontSize: 17,
                        indexLabel: "{label} - #percent%",
                        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
                        dataPoints: dps
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
                 {this.state.check ? <div id="expenseContainer" style={{height: 360 + "px", width: 50 + "%"}}></div> :
                  <div>No expenses yet!</div>}    
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expense: state.expense
})

export default connect(mapStateToProps)(ExpenseGraphPage)