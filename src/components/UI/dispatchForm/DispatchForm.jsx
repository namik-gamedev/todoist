import React, { useState } from 'react'
import Button from '../button/Button'
import Input from '../input/Input'
import cl from './DispatchForm.module.css'

const DispatchForm = ({ onSubmit = () => {}, dispatch, className, inputPlaceholder, btnText }) => {
   const [inputValue, setInputValue] = useState('')
   const [inputIsEmpty, setInputIsEmpty] = useState(false)

   const _onSubmit = (e) => {
      e.preventDefault()
      if (inputValue === '') {
         setInputIsEmpty(true)
         return
      }
      dispatch(inputValue)
      setInputValue('')
      onSubmit()
   }

   const onInputChange = (e) => {
      if (e.target.value.startsWith(' ')) {
         return
      }
      setInputIsEmpty(false)
      setInputValue(e.target.value)
   }

   return (
      <form onSubmit={_onSubmit} className={`${cl.form} ${className}`}>
         <Input value={inputValue} onChange={onInputChange} placeholder={inputPlaceholder} />

         {inputIsEmpty && <div className={cl.form__emptyWarning}>Не оставляйте поле пустым!</div>}

         <Button type='submit'>{btnText}</Button>
      </form>
   )
}

export default DispatchForm
