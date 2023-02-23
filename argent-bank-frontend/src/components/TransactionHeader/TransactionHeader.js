import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { accounts } from '../../services/transactionService'
import '../TransactionHeader/TransactionHeader.css'

/**
 * Component React displaying header for page transactions (containing account data)
 * @component
 */
const TransactionHeader = ({accountId}) => {

  /**
     * Store the data's account variables
     */
    let accountsStore = useSelector(state => state.accounts)


    /**
     * Store the token variable
     */
    const [token, setToken] = useState([])
    const [accountsData, setAccountsData] = useState([])

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
     * useEffect is used to retrieve the datas from the user's service in asynchronous mode when dispatch or token changes
     * also to retrieve the datas from the transaction service
     */
   useEffect(() => {
    
    async function fetchAccounts (){
        let result = await accounts (token)       
        setAccountsData(result)
    }
    if(token.length > 0 && accountsStore == null){
        fetchAccounts()
    }        
}, [accountsData, accountsStore, token]) 

  /**
     * Get the user account from the state
     */   
    const [account, setAccount] = useState(null)
  
    useEffect(() => {    
        if(accountsData != null && accountsData.length > 0 ){
          let result = accountsData.filter(account => {
            return account.accountId === accountId
          }) 
        
        setAccount(result[0])
        }        
    }, [accountId, accountsData]) 


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