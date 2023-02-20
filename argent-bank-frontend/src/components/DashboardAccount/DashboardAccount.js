import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"

import { profileSuccesful, profileFailed } from '../../features/featuresUser/actions/Action'
import { profile } from "../../services/userService"

import '../../components/DashboardAccount/DashboardAccount.css'

/**
 * Component React which display the account's information of an user
 * @component
 */

const DashboardAccount = () => {
    /**
     * Get the user's token from the state
     */
    const token = useSelector(state => state.token)
    
    /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    /**
     * useEffect is used to retrieve the datas from the user's service in asynchronous mode
     */
    useEffect(() => {
        async function fetchData (){
            let userProfile = await profile (token)
            if( userProfile != null ) {
                dispatch(profileSuccesful(userProfile))
            } else {
                dispatch(profileFailed("User not found"))
            }
        }
        fetchData()
    }, [dispatch, token]) 

    /**
     * Get the user profile from the state
     */
    const user = useSelector(state => state.user)    

    return (
        <main className="mainAccount">
            <div className="header">
                <h1>Welcome back<br />{ user.firstName } { user.lastName }!</h1>
                <button className="editButton">Edit Name</button>
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