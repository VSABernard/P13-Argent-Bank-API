import React, { useState, useEffect } from "react"
import { transaction } from '../../services/transactionService'

/**
 * Component React displaying header for page transactions (containing account data)
 * @component
 */
const TransactionDashboard = () => {

  /**
     * Store the data's transaction variables
     */
  const [transactionDatas, setTransactionDatas] = useState([])

  useEffect(() => {
    async function fetchTransactions (){
      let userTransactions = await transaction ()
      setTransactionDatas(userTransactions)
  }
      fetchTransactions()
}, []) 

  return (    
    <div className="transactionInfos">
       {/* { transactionDatas.map((transactions) => (
        <li key={transactions.transactionId} className='atransactionList'>
            <div className='list'>
                <p className="transactionDate">{transactions.createdAt}</p>
                <p className="transactionDescription">{transactions.description}</p>
                <p className="transactionAmount">${transactions.amount}</p>
                <p className="transactionBalance">{transactions.balance}</p>
            </div>
          </li>
        ))}  */}
    </div>
  )
}

export default TransactionDashboard