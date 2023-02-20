import { LOGIN_SUCCESFUL, LOGIN_FAILED } from '../actions/Action'

/**
 * The functions in Redux that take the curent state and an action and return a new state.
 * To know if an user is connected. * 
 * @param { Object } state A boolean 
 * @param { Object } action Sign in
 */
const loginReducer = (state = null, action) => {
    switch (action.type) {
        case LOGIN_SUCCESFUL:
            return action.payload 
        case LOGIN_FAILED:
            return null
        default:
            return state
    }
}

export default loginReducer