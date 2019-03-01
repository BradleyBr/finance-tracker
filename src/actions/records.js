import firebase from 'firebase'

// SET RECORDS

export const setRecords = (record) => ({
    type: 'SET_RECORD',
    record
})

export const startSetRecords = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        let records = []
        return firebase.database().ref(`users/${uid}/records`).once('value').then(snapshot => {
            records.push(snapshot.val())
            dispatch(setRecords(records)) 
        })
    }
}