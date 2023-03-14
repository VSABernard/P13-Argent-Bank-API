import { userAccountData, userTransactionsData } from "../data/TransactionDatas"

/**
 * Function which calls the API /transaction
 * @param {String} token Authorization token
 * @returns Token
 */
export async function accounts( token ) {
    let accounts = []
    accounts = userAccountData.body.accountData    
    return accounts
}

/**
 * Function which calls the API /transaction
 * @param {String} accountId User's account identity
 * @returns 
 */
export async function transaction( accountId ) {
    let transactions = []
    transactions = userTransactionsData.body.transactions

    let transactionsByAccountId = transactions.filter(transaction => {
           
            return transaction.accountId === accountId}
        )

    return transactionsByAccountId
}