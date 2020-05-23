import React from 'react'
import './Modal.css'

const Modal = ({ children, isActive, onClick }) => (
  <div className={`modal${isActive ? ' active' : ''}`} onClick={onClick}>
    {children}
  </div>
)

export default Modal
