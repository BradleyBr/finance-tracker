export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return [
                ...state,
                action.income
            ]
        case 'REMOVE_INCOME':
            const id = action.id
            return [
                ...state.filter((income) => {
                   return income.id !== id
                })
            ]
        case 'SET_INCOME':
            return action.income
        case 'EMPTY_INCOME':
            return []
        default:
            return state
    }
}