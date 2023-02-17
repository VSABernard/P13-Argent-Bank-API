const userState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default userReducer