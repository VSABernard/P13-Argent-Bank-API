import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaPencilAlt } from 'react-icons/fa'

import '../Accordion/Accordion.css'

function Accordion ({transaction}) {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='accordion'  >
            <div className='accordionHeader' onClick={handleToggle}>
                <div className='accordionTitle'>
                    {isOpen ? <FaChevronUp className='chevronUp'/> : <FaChevronDown className='chevronDown'/>}                
                    <p className="transactionDate">{transaction.createdAt}</p>
                    <p className="transactionDescription">{transaction.description}</p>
                    <p className="transactionAmount">${transaction.amount}</p>
                    <p className="transactionBalance">${transaction.balance}</p>
                </div>
            </div>
            {isOpen && (
                <div className='accordionBody'>
                    <ul className='accordionList' >
                        <div>Transaction type : {transaction.type}</div>
                        <div className='category'>
                            <p>Category : {transaction.category}</p>
                            <button className='buttonPencil'>
                                <FaPencilAlt className='pencil'/>
                            </button>
                            
                        </div>
                        <div className='note'>
                            <p>Note :</p> 
                            <button className='buttonPencil'>
                                <FaPencilAlt className='pencil'/>
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </div>
      )
}

export default Accordion