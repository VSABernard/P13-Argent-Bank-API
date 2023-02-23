import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import '../TransactionHeader/TransactionHeader.css'

/**
 * Component React displaying header for page transactions (containing account data)
 * @component
 */
const TransactionHeader = () => {

  /**
     * Store the data's account variables
     */
    const accounts = useSelector(state => state.accounts)

  /**
     * Get the user account from the state
     */   
    const { accountId } = useParams()
    const [account, setAccount] = useState(null)
  
    useEffect(() => {    
        if(accounts != null && accounts.length > 0 ){
          let result = accounts.filter(account => {
            return account.accountId === accountId
          }) 
        
        setAccount(result[0])
        }        
    }, [accountId, accounts]) 

  if(account != null ){
  return (     
    <div className="transactionHeader">
      <div className='transactionInfo'>
          <div className="transactionContentWrapper">
            <p className="transactionTitle">{account.title}</p>
            <p className="transactionAmount">{account.amount}</p>
            <p className="transactionAmountDescription">{account.description}</p>
        </div>
      </div>
    </div>
  )}
}

export default TransactionHeader