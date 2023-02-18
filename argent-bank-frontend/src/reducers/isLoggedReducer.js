/**
 * The functions in Redux that take the curent state and an action and return a new state.
 * To know if an user is connected. * 
 * @param { Object } state A boolean 
 * @param { Object } action Sign in
 */
const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return true 
        case 'SIGN_OUT':
            return false
        default:
            return state
    }
}

export default loggedReducer