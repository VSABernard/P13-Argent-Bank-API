export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}