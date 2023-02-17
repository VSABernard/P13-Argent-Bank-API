import React from "react"
import { Link } from "react-router-dom"
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
                    <button className={'navButton'} to=' '>
                        Sign In
                    </button>
                </div>
                
            </ul>
        </header>
    )
}

export default Header