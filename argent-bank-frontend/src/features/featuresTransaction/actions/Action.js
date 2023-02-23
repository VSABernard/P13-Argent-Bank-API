export const ACCOUNTS_SUCCESFUL = 'accountsSuccesful'
export const ACCOUNTS_FAILED = 'accountsFailed'

/**
 * JavaScript objects that describe changes to the state of account action.
 * @function
 */
export const accountsSuccesful = (accounts) => {
    return {
        type: ACCOUNTS_SUCCESFUL,
        payload: accounts
    }
}

export const accountsFailed = (error) => {
    return {
        type : ACCOUNTS_FAILED,
        payload : error
    }
}
