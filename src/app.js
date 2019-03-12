import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import { startSetExpenses, startEmptyExpenses } from './actions/expense'
import { startSetIncome, startEmptyIncome } from './actions/income'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from  './firebase/firebase'
import LoadingPage from './components/LoadingPage'
import moment from 'moment'
import { startSetRecords } from './actions/records';

const store = configureStore()
console.log('This project is not yet finished. Modal needs to be added for the memos, proper input checks (no characters in number only fields) and some touch up on styling')
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.querySelector('#app'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.querySelector('#app'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses())
        store.dispatch(startSetIncome())
        store.dispatch(startSetRecords()).then(() => {
                const currentStore = store.getState()
                const now = moment()
                let nowTwoExpense
                let nowTwoIncome
                currentStore.expense.length > 0 ? nowTwoExpense = moment(currentStore.expense[0].createdAt, 'DD/MM/YYYY') : nowTwoExpense = now
                currentStore.income.length > 0 ? nowTwoIncome = moment(currentStore.income[0].createdAt, 'DD/MM/YYYY') : nowTwoIncome = now
                if (now.month() !== nowTwoExpense.month() ) {
                    store.dispatch(startEmptyExpenses(currentStore.expense)).then(() => {
                        store.dispatch(startSetRecords())
                    })
                }
                if (now.month() !== nowTwoIncome.month()) {
                    store.dispatch(startEmptyIncome(currentStore.income)).then(() => {
                        store.dispatch(startSetRecords())
                    })
                }
                renderApp()
            })
        
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})