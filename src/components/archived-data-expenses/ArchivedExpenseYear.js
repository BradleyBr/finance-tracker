import React from 'react'
import ArchivedExpenseMonth from './ArchivedExpenseMonth'
const uuidv4 = require('uuid/v4')

export default class ArchivedExpensePage extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const propsData = this.props.props
        console.log(propsData)
        let yearData = []

        for (var [key, value] of Object.entries(propsData)) {
            console.log(key, value)
            yearData.push(
                <div key={key}>
                    <p>{key}</p>
                    <ArchivedExpenseMonth props={value}  key={key}/>
                 </div>
            )
        }
        return (
            <div>
              {yearData}
            </div>
        )
    }
}