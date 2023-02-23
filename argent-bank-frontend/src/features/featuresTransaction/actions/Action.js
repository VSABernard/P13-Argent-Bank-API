export const ACCOUNTS_SUCCESFUL = 'accountsSuccesful'
export const ACCOUNTS_FAILED = 'accountsFailed'
export const TRANSACTIONS_SUCCESFUL = 'transactionsSuccesful'
export const TRANSACTIONS_FAILED = 'transactionsFailed'

/**
 * JavaScript objects that describe changes to the state of account's action.
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

/**
 * JavaScript objects that describe changes to the state of transaction's action.
 * @function
 */
export const transactionsSuccesful = (accounts) => {
    return {
        type: TRANSACTIONS_SUCCESFUL,
        payload: accounts
    }
}

export const transactionsFailed = (error) => {
    return {
        type : TRANSACTIONS_FAILED,
        payload : error
    }
}