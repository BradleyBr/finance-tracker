import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import ArchivedIncomeYear from './ArchivedIncomeYear'
const uuidv4 = require('uuid/v4')

class ArchivedIncomeList extends React.Component {
    constructor(props) {
        super(props)

    }

    
    render() {
    
        
        const records = this.props.record
        console.log(this.props)

        return (
            <div className="archived-container">
                {records[0] !== null ? 
                    records.map((snapshot) => {
                        return <ArchivedIncomeYear props={snapshot} key={uuidv4()} />
                     }) :
                     <p>No data yet!</p>
                } 
                
            </div>
        )
    }   
}

const mapStateToProps = (state) => ({
    record: state.record
})


export default connect(mapStateToProps)(ArchivedIncomeList)

