import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaUserCircle } from "react-icons/fa"

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
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="signInContent">
            <Form onSubmit={handleSubmit}>
                <FaUserCircle className="userIcon" />
                <h1 className="signInTitle">Sign In</h1>

                <div className="formGroup">
                    <Form.Group className="formLine" size="lg" controlId="email">
                        <Form.Label className="formLabel">Username</Form.Label>
                        <Form.Control autofocus type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="formLine" size="lg" controlId="password">
                        <Form.Label className="formLabel">Password</Form.Label>
                        <Form.Control autofocus type="password" value={password}
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