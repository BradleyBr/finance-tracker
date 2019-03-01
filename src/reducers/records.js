export default (state = [], action) => {
    switch (action.type) {
        case 'SET_RECORD':
        return action.record

        default:
        return state
    }
}