import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import cl from './Header.module.css'

const Header = () => {
   return (
      <header className={cl.header}>
         <h1>
            Todoist <FontAwesomeIcon icon={faCheck} />
         </h1>
      </header>
   )
}

export default Header
