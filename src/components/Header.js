import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <h1 className="header__title">Income Tracker</h1>
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Summary</h1>
                </Link>
                <Link className="header__title" to="/expenselist">
                    <h1>List of Expenses</h1>
                </Link>
                <Link className="header__title" to="/addexpense">
                    <h1>Add Expense</h1>
                </Link>
                <Link className="header__title" to="/incomelist">
                    <h1>List of Income</h1>
                </Link>
                <Link className="header__title" to="/addincome">
                    <h1>Add Income</h1>
                </Link>
                <button className="button button--logout" onClick={startLogout}>Logout</button>
            </div>
            
        </div>
        
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
}) 

export default connect(undefined, mapDispatchToProps)(Header)