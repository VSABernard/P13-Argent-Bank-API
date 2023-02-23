import { ACCOUNTS_SUCCESFUL, ACCOUNTS_FAILED } from '../actions/Action'

/**
 * The functions in Redux that take the curent state and an action and return a new state.
 * @param { Object } state A boolean 
 * @param { Object } action 
 */
const accountsReducer = (state = null, action) => {
    switch (action.type) {
        case ACCOUNTS_SUCCESFUL:
            return action.payload 
        case ACCOUNTS_FAILED:
            return null
        default:
            return state
    }
}

export default accountsReducer