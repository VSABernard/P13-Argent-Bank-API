import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { transaction } from '../../services/transactionService'
import { profile } from '../../services/userService'
import { transactionsSuccesful, transactionsFailed } from '../../features/featuresTransaction/actions/Action'
import { profileSuccesful, profileFailed } from '../../features/featuresUser/actions/Action'

import Accordion from "../Accordion/Accordion"
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
     * Store the token variable
     */
    const [token, setToken] = useState([])

    /**
     * When the component is mounted, it retrieve the token from the localStorage
     */
    useEffect(() => {
        const tokenLocalStorage = JSON.parse(localStorage.getItem('token'))
        
        /**
         * The token is updated in the state
         */
        if(tokenLocalStorage){
            setToken(tokenLocalStorage)          
        } 
    },[])    

    /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchUser (){
            let userProfile = await profile (token)
            if( userProfile != null ) {
                dispatch(profileSuccesful(userProfile))
            } else {
                dispatch(profileFailed("User not found"))
            }
        }
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
        fetchUser()
    }, [accountId, dispatch, token]) 

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
                { transactionDatas.map((transaction) => (
                    <Accordion key={transaction.transactionId}  transaction={transaction}/>
                ))}
            </div>
        </div>
  )
}

export default TransactionDashboard