import React from 'react'
const uuidv4 = require('uuid/v4')

export default class ArchivedExpensePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const propsData = this.props.props.expense
        
        if (propsData) {
            propsData.forEach((snapshot) => {
            })
            return (
                <div className="archive-expense__body">
                    <div className="archive-expense__header">
                        <p>Type of Expense</p>
                        <p>Memo</p>
                        <p>Value</p>
                        <p>Date Entered</p>
                    </div>
                    {propsData.map((snapshot) => {
                        return (
                            <div className="archive-expense__data" key={uuidv4()}>
                                <p>{snapshot.expenseType}</p>
                                <p>{snapshot.expenseDescription}</p>
                                <p>{snapshot.expenseAmount}</p>
                                <p>{snapshot.createdAt}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
               <p>No expense data recorded for this month</p>
            )
        }
    }
}