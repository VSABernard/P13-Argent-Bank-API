import React from 'react'

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import TransactionHeader from '../../components/TransactionHeader/TransactionHeader'
// import TransactionDashboard from '../../components/TransactionDashboard/TransactionDashboard'
import Footer from '../../components/Footer/Footer'

import '../AccountPage/AccountPage.css'

/**
 * Component React which displays the account's info of the user
 * @component
 */

const AccountPage = () => {
    return (
        <div className='accountPageSection'>
            <DashboardHeader />
            <div className='accountInfos'>
                <TransactionHeader />
                TransactionDashboard 
            </div> 
            <Footer />
        </div>
    )    
}

export default AccountPage