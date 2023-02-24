import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, CloseButton } from 'react-bootstrap'

import { update } from '../../services/userService'
import { updateSuccesful, updateFailed } from '../../features/featuresUser/actions/Action'

import '../EditNameForm/EditNameForm.css'

/**
 * Component React which displays the edit form of the user's name
 * @component
 * @param {*} show The modal will only be displayed when show state is true
 * @param {*} close Close the editing modal
 */

const EditNameForm = ({ show, close }) => {

    /**
     * Get the user profile from the state
     */
     const user = useSelector(state => state.user)  
     const userFirstName = user.firstName
     const userLastName = user.lastName     
   
    const [firstName, setFirstName] = useState(userFirstName)
    const [lastName, setLastName] = useState(userLastName)
    const [token, setToken] = useState([])  

    useEffect(() => {
        const tokenLocalStorage = JSON.parse(localStorage.getItem('token'))
        
        if(tokenLocalStorage){
            setToken(tokenLocalStorage)          
        } 

    },[]) 

    /**
     * The submit button is linked up with the state by using a validate function called validateForm.
     * @function
     */
    function validateFormName() {
        return (  firstName.length > 0 && lastName.length > 0 ) && ( firstName !==  userFirstName || lastName !== userLastName )
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

        let formFirstName = event.target.querySelector('input#firstName.form-control').value
        let formLastName = event.target.querySelector('input#lastName.form-control').value
                
        let userUpdate = await update( token, formFirstName, formLastName )        

        if ( userUpdate != null ) {
            /**
             * Must keep the original email 
             */
            userUpdate.email = user.email
            dispatch(updateSuccesful(userUpdate))
            nav('/Dashboard')
        } else {
            dispatch(updateFailed("Error"))
        }

        close()
    }
        
    return (
        <> {
            show ?
        
        <div className='modalEditName' onClick={() => close()}>
            
            {/* Whenever user clicks outside it should close the modal */}
            <Form className='editNameForm' onSubmit={handleSubmitEditName} onClick={(e) => e.stopPropagation()}>      
                <div methode='get' className='editNameBlock'>
                    <Form.Group className="formLineEdit" size="lg" controlId="firstName">
                        <Form.Control autofocus type="text" placeholder={ userFirstName }
                            onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="formLineEdit" size="lg" controlId="lastName">
                        <Form.Control autofocus type="text" placeholder={ userLastName }
                            onChange={(e) => setLastName(e.target.value)} />
                    </Form.Group>
                </div>

                <div className='buttonsSection'>
                    <Button className="buttonSave" block="true" size="lg" type="submit" disabled={!validateFormName()}>
                        Save
                    </Button>
                    <CloseButton className="buttonOut" onClick={() => close()}>
                        Cancel
                    </CloseButton> 
                </div>
            </Form>     
        </div>  

        : null 
        }
        </> 
    ) 
}

export default EditNameForm