import React from "react"
import { Link, NavLink } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"

import logo from '../../assets/argentBankLogo.png'

import '../Header/Header.css'

/**
 * Component React which display the navigation's buttons on the header
 * @component
 */

const Header = () => {
    return (
        <header className="header">
            <h1 className="sr-only">Argent Bank</h1>
            <ul className="headerNav">
                <Link className="logo" to="/" >
                    <img src={logo} alt="Argent Bank logo" />
                </Link>
                <div className="signButton">
                    <FaUserCircle className="userIcon" />
                    <NavLink className={'navButton'} exact to='/SignIn '>
                        Sign In
                    </NavLink>
                </div>
                
            </ul>
        </header>
    )
}

export default Header