import React from 'react'
import ArchivedIncomeMonth from './ArchivedIncomeMonth'
const uuidv4 = require('uuid/v4')

export default class ArchivedIncomePage extends React.Component {
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
                    <ArchivedIncomeMonth props={value}  key={key}/>
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