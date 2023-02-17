import React from "react"

import Header from '../../components/Header/Header'
import SignInForm from "../../components/SignInForm/SignInForm"
import Footer from '../../components/Footer/Footer'

import '../SignIn/SignIn.css'

/**
 * Component React which displays the sign in page of the app
 * @component
 */

const SignIn = () => {
    return (
        <div className="mainSignIn">
            <Header />
            <div className="signInBlock">
                <SignInForm />
            </div>            
            <Footer />
        </div>
    )
}

export default SignIn