import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"

import { profileSuccesful, profileFailed } from '../../features/featuresUser/actions/Action'

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
    const body = {}
    const config = { 
        headers: { Authorization: `Bearer ${token}`}
    }
    const url = 'http://localhost:3001/api/v1/user/profile'
    // console.log('dashboard post /user/profile')

    /**
     * Get the user profile from the state
     */
    const user = useSelector(state => state.user)

    /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    /**
     * Get user's profile from API with token as header's parameter
     */
    try{
        axios.post (url, body, config)
            .then(response => {
                // console.log(response.data)
                
                let user = {
                    firstName : response.data.body.firstName,
                    lastName : response.data.body.lastName,
                    email : response.data.body.email,
                }
                
                dispatch(profileSuccesful(user))
            })
            .catch (error => {
                console.log(error)
            })
        
    } catch (error) {
        dispatch(profileFailed(error))
    }

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