import uuid from 'uuid'
import firebase from 'firebase'

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
            incomeAmount = ''
        } = incomeData
        const income = { incomeDescription, incomeAmount }
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