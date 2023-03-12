import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '../../UI/checkbox/Checkbox'
import DispatchForm from '../../UI/dispatchForm/DispatchForm'
import IconButton from '../../UI/iconButton/IconButton'
import Modal from '../../UI/modal/Modal'
import cl from './Todo.module.css'

const Todo = ({ todo }) => {
   const dispatch = useDispatch()
   const [modalActive, setModalActive] = useState(false)

   const toggleTodoComplete = (e) => {
      dispatch({
         type: 'TOGGLE_TODO_COMPLETE',
         payload: { todo: todo, complete: e.target.checked },
      })
   }

   const removeTodo = (e) => {
      e.stopPropagation()
      dispatch({
         type: 'REMOVE_TODO',
         payload: todo,
      })
   }

   const renameTodo = (inputValue) => {
      dispatch({ type: 'RENAME_TODO', payload: { todo, title: inputValue } })
   }

   const showModal = (e) => {
      e.stopPropagation()
      setModalActive(true)
   }

   return (
      <div className={cl.todo} onClick={toggleTodoComplete}>
         <div className={cl.todo__content}>
            <div className={cl.todo__leftBlock}>
               <Checkbox checked={todo.completed} />
               <div className={todo.completed ? cl.todo__title_completed : cl.todo__title}>
                  {todo.title}
               </div>
            </div>
            <div className={cl.todo__rightBlock}>
               <IconButton iconName='pen' onClick={showModal} />
               <IconButton iconName='trash-can' onClick={removeTodo} />
            </div>
         </div>

         <Modal active={modalActive} setActive={setModalActive}>
            <div>
               <h2>Новое имя задачи</h2>
               <DispatchForm
                  dispatch={renameTodo}
                  onSubmit={() => setModalActive(false)}
                  inputPlaceholder='Помыть посуду...'
                  btnText='Переименовать задачу'
               />
            </div>
         </Modal>
      </div>
   )
}

export default Todo
