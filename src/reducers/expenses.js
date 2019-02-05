export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            const id = action.id
            return [
                ...state.filter((expense) => {
                    return expense.id !== id    
            })]
        case 'SET_EXPENSE':
            return action.expense
            
        default:
            return state
    }
}