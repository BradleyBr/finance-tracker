import React from 'react'
import ArchivedExpenseList from './archived-data-expenses/ArchivedExpenseList'
import ArchivedIncomeList from './archived-data-income/ArchivedIncomeList'

export default class ArchiveData extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ArchivedExpenseList />
                <ArchivedIncomeList />
            </div>
        )
    }
}