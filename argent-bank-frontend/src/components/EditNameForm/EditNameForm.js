import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { update } from "../../services/userService"
import { updateSuccesful, updateFailed } from "../../features/featuresUser/actions/Action"

import '../EditNameForm/EditNameForm.css'

/**
 * Component React which displays the edit form of the user's name
 * @component
 */

const EditNameForm = () => {
   
     /**
     * Get the user profile from the state
     */
     const user = useSelector(state => state.user)  
     const userFirstName = user.firstName
     const userLastName = user.lastName

     const token = useSelector(state => state.token)
   
   
    const [firstName, setFirstName] = useState(userFirstName)
    const [lastName, setLastName] = useState(userLastName)

    /**
     * The submit button is linked up with the state by using a validate function called validateForm.
     * @function
     */
    function validateFormName() {
        return firstName !==  userFirstName || lastName !== userLastName
    }

    /**
     * The dispatch is used to send actions to the reducer
     */
    const dispatch = useDispatch()

    /**
     * The hook that comes with React Router that will allow us to use the browser’s History API.
     */
    const nav = useNavigate()

    /**
     * The callback handleSubmit is triggered when the form is submitted.
     * @param {*} event 
     */
    async function handleSubmitEditName(event) {
        event.preventDefault()

        let formFirstName = event.target.querySelector('input#firstName.form-control').defaultValue
        let formLastName = event.target.querySelector('input#lastName.form-control').defaultValue
                
        let result = await update( token, formFirstName, formLastName )
        
        if ( token != null ) {
             dispatch(updateSuccesful(token))
             nav('/Dashboard')
        } else {
             dispatch(updateFailed("Token error"))
        }
    }

    return (
        <Form className='editNameForm' onSubmit={handleSubmitEditName}>
            <div methode='get' className='editNameBlock'>
                <Form.Group className="formLine" size="lg" controlId="firstName">
                    <Form.Label className="formLabel">Firstname</Form.Label>
                    <Form.Control autofocus type="text" placeholder={ userFirstName }
                        onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group className="formLine" size="lg" controlId="lastName">
                    <Form.Label className="formLabel">Lastname</Form.Label>
                    <Form.Control autofocus type="text" placeholder={ userLastName }
                        onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
            </div>

            <Button className="buttonSave" block="true" size="lg" type="submit" disabled={!validateFormName()}>
                Submit
            </Button>

        </Form>        
    ) 
}

export default EditNameForm