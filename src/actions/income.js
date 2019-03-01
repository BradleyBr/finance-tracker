import uuid from 'uuid'
import firebase from 'firebase'
import moment from 'moment'

//ADD INCOME
export const addIncome = (income) => ({
    type: 'ADD_INCOME',
    income
})

export const startAddIncome = (incomeData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            incomeDescription = '',
            incomeAmount = '',
            createdAt = ''
        } = incomeData
        const income = { incomeDescription, incomeAmount, createdAt }
       return firebase.database().ref(`users/${uid}/income`).push(income).then((ref) => {
            dispatch(addIncome({
                id: ref.key,
                ...income
            }))
        })
    }
}

//REMOVE INCOME
export const removeIncome = (id) => ({
    type: 'REMOVE_INCOME',
    id
})

export const startRemoveIncome = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return firebase.database().ref(`users/${uid}/income/${id}`).remove().then(() => {
            dispatch(removeIncome(id))
        })
    }
}

//SET INCOME

export const setIncome = (income) => ({
    type: 'SET_INCOME',
    income
})

export const startSetIncome = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const income = []
        return firebase.database().ref(`users/${uid}/income`).once('value').then((snapshot) => {
            snapshot.forEach((snap) => {
                income.push({
                    id: snap.key,
                    ...snap.val()
                })
            })
            dispatch(setIncome(income))
        })
    }
}

// EMPTY INCOME STORE

export const emptyIncome = () => ({
    type: 'EMPTY_INCOME'
})

export const startEmptyIncome = (income) => {
    
    const nowYear = moment(income[0].createdAt, 'DD/MM/YYYY').year()
    const nowMonth = moment(income[0].createdAt, 'DD/MM/YYYY').format('MMMM')
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        console.log(income)
        return firebase.database().ref(`users/${uid}/records/${nowYear}/${nowMonth}`).update({income}).then(() => {
            return firebase.database().ref(`users/${uid}/income`).remove().then(() => {
                dispatch(emptyIncome())
            })
        })
    }
}