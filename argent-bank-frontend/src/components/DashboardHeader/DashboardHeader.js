import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { signOut } from "../../features/featuresUser/actions/Action"

import logo from '../../assets/argentBankLogo.png'

import '../../components/DashboardHeader/DashboardHeader.css'

/**
 * Component React which display the navigation's buttons on the header od the dashboard page
 * @component
 */

const DashboardHeader = () => {
    /**
     * Get the user profile from the state
     */
    const user = useSelector(state => state.user)

    /**
     * The hook that comes with React Router that will allow us to use the browser’s History API.
     */
    const nav = useNavigate()

    /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    /**
     * The callback handleSubmit for the sign out button is triggered when the form is submitted.
     * @param {*} event 
     */
    function handleSubmit(event) {
        event.preventDefault()
        localStorage.removeItem('token')        // Token will be removed when sign out button is clicked
        dispatch(signOut())
        nav('/')
    }

    return (
        <header className="headerDashboard">
            <h1 className="srOnly">Argent Bank</h1>
            <ul className="headerNav">
                <Link className="logo" to="/" >
                    <img src={logo} alt="Argent Bank logo" />
                </Link>
                <div className="signOut">
                    <div className='userFirtsname'>
                        <FaUserCircle className="userIconDashboard" />
                        <p>{ user.firstName }</p>
                    </div>
                    <Form className='signOutBlock' onSubmit={handleSubmit}>
                        <FaSignOutAlt className='signoutIcon' />
                        <Button className="buttonSignOut" block="true" size="lg" type="submit" >
                            Sign Out
                        </Button>
                    </Form>
                </div>                
            </ul>
        </header>
    )
}

export default DashboardHeader