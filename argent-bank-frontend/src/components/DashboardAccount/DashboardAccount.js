import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"

import { profileSuccesful, profileFailed } from '../../features/featuresUser/actions/Action'
import { profile } from "../../services/userService"
import EditNameForm from '../EditNameForm/EditNameForm'

import '../../components/DashboardAccount/DashboardAccount.css'

/**
 * Component React which display the account's information of an user
 * @component
 */

const DashboardAccount = () => {
   
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

    /**
     * useEffect is used to retrieve the datas from the user's service in asynchronous mode,
     * when dispatch or token changes
     */
    useEffect(() => {
        console.log('useEffect dispatch token')
        async function fetchData (){
            let userProfile = await profile (token)
            if( userProfile != null ) {
                dispatch(profileSuccesful(userProfile))
            } else {
                dispatch(profileFailed("User not found"))
            }
        }
        if(token.length > 0){
            fetchData()
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
                <div className="accountContentWrapper">
                <h3 className="accountTitle">Argent Bank Checking (x8349)</h3>
                <p className="accountAmount">$2,082.79</p>
                <p className="accountAmountDescription">Available Balance</p>
                </div>

                <div className="accountContentWrapper cta">
                <button className="transactionButton">View transactions</button>
                </div>
            </section>

            <section className="account">
                <div className="accountContentWrapper">
                <h3 className="accountTitle">Argent Bank Savings (x6712)</h3>
                <p className="accountAmount">$10,928.42</p>
                <p className="accountAmountDescription">Available Balance</p>
                </div>

                <div className="accountContentWrapper cta">
                <button className="transactionButton">View transactions</button>
                </div>
            </section>

            <section className="account">
                <div className="accountContentWrapper">
                <h3 className="accountTitle">Argent Bank Credit Card (x8349)</h3>
                <p className="accountAmount">$184.30</p>
                <p className="accountAmountDescription">Current Balance</p>
                </div>

                <div className="accountContentWrapper cta">
                <button className="transactionButton">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default DashboardAccount