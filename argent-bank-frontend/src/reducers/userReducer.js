const userState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

/**
 * The functions in Redux that take the curent state and an action and return a new state.
 * To update the user's profile
 * @param { Object } state User's infos 
 * @param { Object } action Update user's profile
 */
const userReducer = (state = userState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducer