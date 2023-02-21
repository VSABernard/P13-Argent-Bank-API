import React from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import EditNameForm from '../../components/EditNameForm/EditNameForm'

import '../EditName/EditName.css'

/**
 * Component React which displays the page to edit the user's name
 * @component
 */

const EditName = () => {
    return (
        <div className='editName'>
            <Header />
            <section className='editNameContent'>
                <EditNameForm />
            </section>
            <Footer />
        </div>
        
    ) 
}

export default EditName