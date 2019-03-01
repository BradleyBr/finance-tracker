import uuid from 'uuid'
import firebase from 'firebase'
import moment from 'moment'

// ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            expenseType = '',
            expenseDescription = '',
            expenseAmount = '',
            createdAt = ''
        } = expenseData
        const expense = { expenseType, expenseDescription, expenseAmount, createdAt }
        return firebase.database().ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// REMOVE EXPENSE
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid= getState().auth.uid
        return firebase.database().ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id))
        })
    }
}

//SET EXPENSES

export const setExpense = (expense) => ({
    type:'SET_EXPENSE',
    expense
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const expenses = []
        return firebase.database().ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            snapshot.forEach((snap) => {
                expenses.push({
                    id: snap.key,
                    ...snap.val()
                })
            })
            dispatch(setExpense(expenses))
        })
    }
}

// EMPTY EXPENSE STORE

export const emptyExpenses = () => ({
    type: 'EMPTY_EXPENSE'
})

export const startEmptyExpenses = (expenses) => {
    
    const nowYear = moment(expenses[0].createdAt, 'DD/MM/YYYY').year()
    const nowMonth = moment(expenses[0].createdAt, 'DD/MM/YYYY').format('MMMM')
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        console.log(expenses)
        return firebase.database().ref(`users/${uid}/records/${nowYear}/${nowMonth}`).set({expense: expenses}).then(() => {
            return firebase.database().ref(`users/${uid}/expenses`).remove().then(() => {
                dispatch(emptyExpenses())
            })
        })
    }
}