import React from 'react'
const uuidv4 = require('uuid/v4')

export default class ArchivedIncomePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const propsData = this.props.props.income

        if (propsData) {
            propsData.forEach((snapshot) => {
            })
            return (
                <div className="archive-income__body">
                    <div className="archive-income__header">
                        <p>Memo</p>
                        <p>Value</p>
                        <p>Date Entered</p>
                    </div>  
                    {propsData.map((snapshot) => {
                        return (
                            <div className="archive-income__data" key={uuidv4()}>
                                <p>{snapshot.incomeDescription}</p>
                                <p>{snapshot.incomeAmount}</p>
                                <p>{snapshot.createdAt}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <p>No income data recorded this month</p>
            )
        }
        } 
       
}