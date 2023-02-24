import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FaUserCircle } from "react-icons/fa"
import { loginSuccesful, loginFailed } from "../../features/featuresUser/actions/Action"
import { login } from "../../services/userService"


import "../SignInForm/SignInForm.css"

/**
 * Component React which displays the sign in form on the sign in page
 * @function 
 */

function SignInForm () {
    /**
     * The useState hook is used to store what the user enters in the form.
     * The state the connected to the two fields in the form using the setEmail and setPassword functions
     * to store what the user types in — e.target.value.
     * The autoFocus flag is setted for our fields, so that when the form loads, it sets focus to this field.
     */
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")     

    /**
     * The hook that comes with React Router that will allow us to use the browser’s History API.
     */
    const nav = useNavigate()

    /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    /**
     * The submit button is linked up with the state by using a validate function called validateForm.
     * @function
     */
    function validateForm() {
        return email.length > 0 && password.length > 0
    }

    /**
     * The callback handleSubmit is triggered when the form is submitted.
     * @param {*} event 
     */
    async function handleSubmit(event) {
        event.preventDefault()

        let email = event.target.querySelector('input#email.form-control').defaultValue
        let password = event.target.querySelector('input#password.form-control').defaultValue
                
        let token = await login( email, password )
        
        /**
         * The token is saved in localStorage when the sign in is succesful
         */
        if ( token != null ) {
            dispatch(loginSuccesful(token))
            localStorage.setItem('token',JSON.stringify(token))
            nav('/Dashboard')
        } else {
            localStorage.setItem('token',JSON.stringify(""))
            dispatch(loginFailed("Token error"))
        }
    }

    return (
        <div className="signInContent">
            <Form onSubmit={handleSubmit}>
                <FaUserCircle className="userIconSignIn" />
                <h1 className="signInTitle">Sign In</h1>

                <div className="formGroupSignIn">
                    <Form.Group className="formLineSignIn" size="lg" controlId="email">
                        <Form.Label className="formLabelSignIn">Username</Form.Label>
                        <Form.Control className="formControlSignIn" autofocus type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />                            
                    </Form.Group>

                    <Form.Group className="formLineSignIn" size="lg" controlId="password">
                        <Form.Label className="formLabelSignIn">Password</Form.Label>
                        <Form.Control className="formControlSignIn" autofocus type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <div className="rememberBox">
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                </div>

                <Button className="buttonSignInForm" block="true" size="lg" type="submit" disabled={!validateForm()}>
                    Sign In
                </Button>
                
            </Form>
        </div>
    )
}

export default SignInForm