import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa"

import logo from '../../assets/argentBankLogo.png'

import '../../components/DashboardHeader/DashboardHeader.css'

/**
 * Component React which display the navigation's buttons on the header od the dashboard page
 * @component
 */

const DashboardHeader = () => {
    return (
        <header className="headerDashboard">
            <h1 className="sr-only">Argent Bank</h1>
            <ul className="headerNav">
                <Link className="logo" to="/" >
                    <img src={logo} alt="Argent Bank logo" />
                </Link>
                <div className="signButton">
                    <div className='userFirtsname'>
                        <FaUserCircle className="userIcon" />
                        <p>Tony</p>
                    </div>
                    <NavLink className={'navButtonSignout'} exact to='/'>
                        <FaSignOutAlt className='signoutIcon' />
                        Sign Out
                    </NavLink>
                </div>                
            </ul>
        </header>
    )
}

export default DashboardHeader