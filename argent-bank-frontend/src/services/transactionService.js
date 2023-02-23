import { userAccountData, userTransactionsData } from "../data/TransactionDatas"

export async function accounts( token ) {
    let accounts = []
    accounts = userAccountData.body.accountData    
    return accounts
}

export async function transaction( token ) {
    let transactions = []
    transactions = userTransactionsData.body.accountData
    return transactions
}