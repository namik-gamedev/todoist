import React from 'react'
import cl from './Checkbox.module.css'

const Checkbox = ({ checked, onChange }) => {
   return <input onChange={onChange} checked={checked} type='checkbox' className={cl.checkbox} />
}

export default Checkbox
