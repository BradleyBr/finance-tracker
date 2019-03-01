import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="main-header-container">
        <div>
            <h1>Finance Tracker</h1>
            <p>Track your monthly income and expenses and see how your cash flows!</p>
            <p>The summary will compare your in's and out's in total, while the data will be shown individually in the expense and income sections.</p>
            <p>At the start of a new month, the page will reset, and your previous data will be stored in the archives!</p>
        </div>
        <div className='logout-container'>
            <button className="button button--logout" onClick={startLogout}>Logout</button>
        </div>
          
        </div>
        <div className="content-container">
        <div className="triangle-bottomright">
        </div>
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h2>Summary</h2>
                </Link>
                <Link className="header__title" to="/expenselist">
                    <h2>Expenses</h2>
                </Link>
                <Link className="header__title" to="/incomelist">
                    <h2>Income</h2>
                </Link>
                <Link className="header__title" to="/archive">
                    <h2>Archive</h2>
                </Link>
                
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
}) 

export default connect(undefined, mapDispatchToProps)(Header)