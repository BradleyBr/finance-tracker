import React from 'react'
import { connect } from 'react-redux'
import ArchivedExpenseYear from './ArchivedExpenseYear'
const uuidv4 = require('uuid/v4')

class ArchivedExpenseList extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
    
        
        const records = this.props.record

        return (
            <div className="archive-expense-container">
                {records[0] !== null ? 
                    records.map((snapshot) => {
                        return <ArchivedExpenseYear props={snapshot} key={uuidv4()} />
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


export default connect(mapStateToProps)(ArchivedExpenseList)

