import React from 'react'

import DashboardHeader from '../../components/DashboardHeader/DashboardHeader'
import DashboardAccount from '../../components/DashboardAccount/DashboardAccount'
import Footer from '../../components/Footer/Footer'

import '../Dashboard/Dashboard.css'

/**
 * Component React which displays the account's info of the user
 * @component
 */

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <DashboardHeader />
            <DashboardAccount /> 
            <Footer />
        </div>
    )    
}

export default Dashboard