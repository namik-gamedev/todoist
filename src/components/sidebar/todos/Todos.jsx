import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DispatchForm from '../../UI/dispatchForm/DispatchForm'
import IconButton from '../../UI/iconButton/IconButton'
import Modal from '../../UI/modal/Modal'
import cl from './Todos.module.css'

const Todos = ({ todos }) => {
   const dispatch = useDispatch()
   const todosList = useSelector((store) => store.todosList)
   const [modalActive, setModalActive] = useState(false)

   const setCurrentTodos = (e) => {
      dispatch({
         type: 'SET_CURRENT_TODOS',
         payload: todos,
      })
   }

   const removeTodos = (e) => {
      e.stopPropagation()
      dispatch({
         type: 'REMOVE_TODOS',
         payload: todos,
      })
      dispatch({
         type: 'SET_FIRST_TODOS',
      })
   }

   const renameTodos = (inputValue) => {
      dispatch({ type: 'RENAME_TODOS', payload: { todos, title: inputValue } })
      dispatch({ type: 'SET_CURRENT_TODOS', payload: todos })
   }

   const showModal = (e) => {
      e.stopPropagation()
      setModalActive(true)
   }

   return (
      <li key={todos.id} onClick={setCurrentTodos} className={cl.todos}>
         <div className={cl.todos__content}>
            <div className={cl.todos__title}>{todos.title}</div>
            <div className={cl.todos__rightBlock}>
               <IconButton iconName='pen' onClick={showModal} />
               <IconButton iconName='trash-can' onClick={removeTodos} />
            </div>
         </div>

         <Modal active={modalActive} setActive={setModalActive}>
            <div>
               <h2>Новое имя группы</h2>
               <DispatchForm
                  dispatch={renameTodos}
                  onSubmit={() => setModalActive(false)}
                  inputPlaceholder='Школьные дела...'
                  btnText='Переименовать задачу'
               />
            </div>
         </Modal>
      </li>
   )
}

export default Todos
