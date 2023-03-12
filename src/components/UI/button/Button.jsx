import React from 'react'
import cl from './Button.module.css'

const Button = ({ onClick, type, children, className }) => {
   return (
      <button className={`${cl.btn} ${className}`} onClick={onClick} type={type}>
         {children}
      </button>
   )
}

export default Button
