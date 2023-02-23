import { userAccountData, userTransactionsData } from "../data/TransactionDatas"

export async function accounts( token ) {
    let accounts = []
    accounts = userAccountData.body.accountData    
    return accounts
}

export async function transaction( accountId ) {
    let transactions = []
    transactions = userTransactionsData.body.transactions

    let transactionsByAccountId = transactions.filter(transaction => {
           
            return transaction.accountId === accountId}
        )

    return transactionsByAccountId
}