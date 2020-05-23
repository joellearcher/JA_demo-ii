import React from 'react'
import './Input.css'

const Input = ({ id, ...props }) => (
  <>
    {id && (
      <label className='input-label' htmlFor={id}>
        {`${id}: `}
      </label>
    )}
    <input id={id} className='input-input' {...props} />
  </>
)

export default Input
