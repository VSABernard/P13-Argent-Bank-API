import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'

import { profileSuccesful, profileFailed } from '../../features/featuresUser/actions/Action'
import { accountsSuccesful, accountsFailed } from '../../features/featuresTransaction/actions/Action'
import { profile } from '../../services/userService'
import { accounts } from '../../services/transactionService'
import EditNameForm from '../EditNameForm/EditNameForm'

import '../../components/DashboardAccount/DashboardAccount.css'

/**
 * Component React which display the account's information of an user
 * @component
 */

const DashboardAccount = () => {   
      
    /**
     * Store the token's variable which is an empty object at first 
     */
    const [token, setToken] = useState('')

    /**
     * Store the user's variable which is empty for each object at first
     */
    const [user, setUser] = useState({firstName:'',lastName:''})

    /**
     * Store the data's account variables which is an empty array at first
     */
    const [accountDatas, setAccountDatas] = useState([])

    /**
     * When the component is mounted, it retrieve the token from the localStorage
     * The second parameter is an empty array, so the useEffect is used only one time
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
     * useEffect is trigerred when the valeur of dispatch and token change
     */
    useEffect(() => {
        async function fetchUser (){
            let userProfile = await profile (token)
            if( userProfile != null ) {
                dispatch(profileSuccesful(userProfile))
                setUser(userProfile)
            } else {
                dispatch(profileFailed("User not found"))
            }
        }
        async function fetchAccounts (){
            let userAccounts = await accounts (token)
            setAccountDatas(userAccounts)
            if( userAccounts != null ) {
                dispatch(accountsSuccesful(userAccounts))
            } else {
                dispatch(accountsFailed("User not found"))
            }
        }
        if(token !== ''){
            fetchUser()
            fetchAccounts()
        }        
    }, [dispatch, token])    

    /**
     * Get the user profile from the state
     */
    const userStore = useSelector(state => state.user)  
 
    /**
     * useEffect is used to detect the change in the editName
     */
    useEffect(() => {
        setUser(userStore)
    },[userStore])
    
    /**
     * Create one state to open and close modal editNameForm
     */
    const [modal, setModal] = useState(false)
    const Toggle = () => setModal(!modal)   

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
            <section className="accountcontent">
                { accountDatas.map((accountData) => (
                    <li key={accountData.accountId} className='accountList'>
                        <div className='info'>
                            <div className="accountContentWrapper">
                            <h3 className="accountTitle">{accountData.title}</h3>
                            <p className="accountAmount">{accountData.amount}</p>
                            <p className="accountAmountDescription">{accountData.description}</p>
                            </div>
                        </div>
                        <div className="accountContentWrapper cta">
                            <Link className="transactionButton" to={`/AccountPage/${accountData.accountId}`} >
                                View transactions
                            </Link>
                        </div>
                    </li>
                ))}
            </section>
        </main>
    )
}

export default DashboardAccount