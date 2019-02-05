import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import ExpenseListPage from '../components/ExpenseListPage'
import AddIncomePage from '../components/AddIncomePage'
import IncomeListPage from '../components/IncomeListPage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>  
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path='/addexpense' component={AddExpensePage} />
            <PrivateRoute path='/expenselist' component={ExpenseListPage} />
            <PrivateRoute path='/addincome' component={AddIncomePage} />
            <PrivateRoute path='/incomelist' component={IncomeListPage} />
            <Route component={NotFoundPage} />
         </Switch>
    </div>
    </Router>
)

export default AppRouter