import React from 'react'
import ArchivedIncomePage from './ArchivedIncomePage'

export default class ArchivedIncomeMonth extends React.Component {
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
                    <ArchivedIncomePage props={value}  key={key}/>
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