import React from 'react'
import cl from './Input.module.css'

const Input = ({ value, onChange, placeholder, type = 'text', className }) => {
   return (
      <input
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         className={`${cl.input} ${className}`}
         type={type}
      />
   )
}

export default Input
