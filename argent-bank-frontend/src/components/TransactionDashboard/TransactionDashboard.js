import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { transaction } from '../../services/transactionService'
import { transactionsSuccesful, transactionsFailed } from '../../features/featuresTransaction/actions/Action'

import { FaChevronDown } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import '../TransactionDashboard/TransactionDashboard.css'

/**
 * Component React displaying header for page transactions (containing account data)
 * @component
 */
const TransactionDashboard = ({accountId}) => {

    /**
     * Store the data's transaction variables
     */
    const [transactionDatas, setTransactionDatas] = useState([])

    /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchTransactions (){
            let userTransactions = await transaction(accountId)
            setTransactionDatas(userTransactions)
            if( userTransactions != null ) {
                dispatch(transactionsSuccesful(userTransactions))
            } else {
                dispatch(transactionsFailed("User not found"))
            }
        }
        fetchTransactions()
    }, [accountId, dispatch]) 

    const [isActive, setIsActive] = useState(false)
    return (    
        <div className="transactionDashboard">
            <div className="titleTransactionList">
                <p className="vide"></p>
                <p className="titleDate">DATE</p>
                <p className="titleDescription">DESCRIPTION</p>
                <p className="titleAmount">AMOUNT</p>
                <p className="titleBalance">BALANCE</p>
            </div>
            <div className="transactionInfos">
                { transactionDatas.map((transactions) => (
                    <li key={transactions.transactionId} className='transactionList'>
                        <div className="chevronSection" onClick={() => setIsActive(!isActive)}>
                            <FaChevronDown className='chevrons' icon={`${isActive  ? 'chevron-up' : 'chevron-down'}`} />
                        </div>
                        <div className='list'>
                            <p className="transactionDate">{transactions.createdAt}</p>
                            <p className="transactionDescription">{transactions.description}</p>
                            <p className="transactionAmount">${transactions.amount}</p>
                            <p className="transactionBalance">${transactions.balance}</p>
                        </div>
                    </li>
                ))}
            </div>
        </div>
  )
}

export default TransactionDashboard