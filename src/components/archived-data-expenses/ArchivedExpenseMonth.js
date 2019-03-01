import React from 'react'
import ArchivedExpensePage from './ArchivedExpensePage'

export default class ArchivedExpenseMonth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const propsData = this.props.props
        let monthData = []

        for (var [key, value] of Object.entries(propsData)) {
            console.log(key, value)
            monthData.push(
                <div key={key}>
                    <p>{key}</p>
                    <ArchivedExpensePage props={value}  key={key}/>
                 </div>
            )
        }
        return (
            <div>
                {monthData}
            </div>
        )
    }
}