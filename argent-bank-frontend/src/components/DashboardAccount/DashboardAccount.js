import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

import { profileSuccesful, profileFailed } from '../../features/featuresUser/actions/Action'
import { profile } from '../../services/userService'
import { accounts } from '../../services/transactionService'
import EditNameForm from '../EditNameForm/EditNameForm'
import Account from '../../pages/Account/Account'

import '../../components/DashboardAccount/DashboardAccount.css'

/**
 * Component React which display the account's information of an user
 * @component
 */

const DashboardAccount = ({accountData}) => {  
   
    /**
     * Store the token variable
     */
    const [token, setToken] = useState([])

    /**
     * Store the data's account variables
     */
    const [accountDatas, setAccountDatas] = useState([])

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

    /**
     * useEffect is used to retrieve the datas from the user's service in asynchronous mode when dispatch or token changes
     * also to retrieve the datas from the transaction service
     */
    useEffect(() => {
        console.log('useEffect dispatch token')
        async function fetchUser (){
            let userProfile = await profile (token)
            if( userProfile != null ) {
                dispatch(profileSuccesful(userProfile))
            } else {
                dispatch(profileFailed("User not found"))
            }
        }
        async function fetchAccounts (){
            let userAccounts = await accounts (token)
            setAccountDatas(userAccounts)
        }
        if(token.length > 0){
            fetchUser()
            fetchAccounts()
        }        
    }, [dispatch, token]) 

    /**
     * Get the user profile from the state
     */
    const user = useSelector(state => state.user)    

    /**
     * Create one state to open and close modal editNameForm
     */
    const [modal, setModal] = useState(false)
    const Toggle = () => setModal(!modal)   

    const navigate = useNavigate()

    return (
        <main className="mainAccount">
            <div className="header">
                <h1>Welcome back<br />{ user.firstName } { user.lastName } !</h1>
                <button className="editButton" onClick={() => Toggle()}>
                        Edit Name
                </button>
                <EditNameForm show={ modal } close={ Toggle } />
            </div>            

            <h2 className="srOnly">Accounts</h2>
            <section className="account">
                { accountDatas.map((accountData) => (
                    <li key={accountData.accountId} className='accountListe'>
                        <div className='info'>
                            <div className="accountContentWrapper">
                            <h3 className="accountTitle">{accountData.title}</h3>
                            <p className="accountAmount">{accountData.amount}</p>
                            <p className="accountAmountDescription">{accountData.description}</p>
                            </div>
                        </div>
                        <div className="accountContentWrapper cta">
                            <button className="transactionButton"  navTo={() => navigate({Account})}>
                                View transactions
                            </button>
                        </div>
                    </li>
                ))}
            </section>
        </main>
    )
}

export default DashboardAccount