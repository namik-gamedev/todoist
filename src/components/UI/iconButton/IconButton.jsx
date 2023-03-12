import React from 'react'
import cl from './IconButton.module.css'

const IconButton = ({ onClick, iconName, className }) => {
   return (
      <button onClick={onClick} className={`${cl.btn} ${className}`}>
         <i className={`fa-solid fa-${iconName}`}></i>
      </button>
   )
}

export default IconButton
