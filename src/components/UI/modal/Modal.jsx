import React from 'react'
import IconButton from '../iconButton/IconButton'
import cl from './Modal.module.css'

const Modal = ({ active, setActive, children }) => {
   return (
      <div
         onClick={(e) => {
            e.stopPropagation()
            setActive(false)
         }}
         className={active ? cl.modal : cl.modal_hidden}
      >
         <div onClick={(e) => e.stopPropagation()} className={`${cl.modal__content} App__block`}>
            {children}
         </div>
      </div>
   )
}

export default Modal
