import React from 'react'
const uuidv4 = require('uuid/v4')

export default class ArchivedIncomePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        const propsData = this.props.props.income
        propsData.forEach((snapshot) => {
            console.log(snapshot.createdAt)
        })
        return (
            <div>
                <p>Memo</p>
                <p>Value</p>
                <p>Date Entered</p>
                {propsData.map((snapshot) => {
                    return (
                        <div key={uuidv4()}>
                            <p>{snapshot.incomeDescription}</p>
                            <p>{snapshot.incomeAmount}</p>
                            <p>{snapshot.createdAt}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}