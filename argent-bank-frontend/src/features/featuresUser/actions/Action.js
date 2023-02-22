export const LOGIN_SUCCESFUL = 'loginSuccesful'
export const LOGIN_FAILED = 'loginFailed'
export const SIGN_OUT = 'signOut'
export const PROFILE_SUCCESFUL = 'profileSuccesful'
export const PROFILE_FAILED = 'profileFailed'
export const UPDATE_SUCCESFUL = 'profileSuccesful'
export const UPDATE_FAILED = 'profileFailed'

/**
 * JavaScript objects that describe changes to the state of login action.
 * @function
 */
export const loginSuccesful = (token) => {
    return {
        type: LOGIN_SUCCESFUL,
        payload: token
    }
}

export const loginFailed = (error) => {
    return {
        type : LOGIN_FAILED,
        payload : error
    }
}

/**
 * JavaScript objects that describe changes to the state of sign out action.
 * @function
 */
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

/**
 * JavaScript objects that describe changes to the state of user's profile.
 * @function
 */
export const profileSuccesful = (user) => {
    return {
        type: PROFILE_SUCCESFUL,
        payload: user
    }
}

export const profileFailed = (error) => {
    return {
        type: PROFILE_FAILED,
        payload: error
    }
}

/**
 * JavaScript objects that describe changes to the state of update user's profile.
 * @function
 */
export const updateSuccesful = (user) => {
    return {
        type: UPDATE_SUCCESFUL,
        payload: user
    }
}

export const updateFailed = (error) => {
    return {
        type: UPDATE_FAILED,
        payload: error
    }
}
