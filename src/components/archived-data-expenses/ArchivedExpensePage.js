import React from 'react'
const uuidv4 = require('uuid/v4')

export default class ArchivedExpensePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const propsData = this.props.props.expense
        propsData.forEach((snapshot) => {
            console.log(snapshot.createdAt)
        })
        return (
            <div>
                <p>Type of Expense</p>
                <p>Memo</p>
                <p>Value</p>
                <p>Date Entered</p>
                {propsData.map((snapshot) => {
                    return (
                        <div key={uuidv4()}>
                            <p>{snapshot.expenseType}</p>
                            <p>{snapshot.expenseDescription}</p>
                            <p>{snapshot.expenseAmount}</p>
                            <p>{snapshot.createdAt}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}