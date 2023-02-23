import { userAccountData } from "../data/TransactionDatas"

export async function accounts( token ) {
    let accounts = []

    accounts = userAccountData.body.accountData
    
    return accounts

}