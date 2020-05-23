import React, { useState } from 'react'
import './ContactManager.css'
import { Form, Modal } from '..'

const ContactManager = ({ onSubmit }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const onClick = () => setIsExpanded(!isExpanded)

  return (
    <>
      <div className='contact-manager-add green' onClick={onClick}>
        +
      </div>
      <Modal onClick={onClick} isActive={isExpanded}>
        <Form onSubmit={onSubmit} />
      </Modal>
    </>
  )
}

export default ContactManager
