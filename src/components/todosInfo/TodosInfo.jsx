import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DispatchForm from '../UI/dispatchForm/DispatchForm'
import Todo from './todo/Todo'
import cl from './TodosInfo.module.css'

const TodosInfo = () => {
   const dispatch = useDispatch()
   const currentTodos = useSelector((store) => store.todos)

   console.log(1)

   return (
      <div className={`${cl.todosInfo} App__block`}>
         {currentTodos && (
            <>
               <h2>{currentTodos.title}</h2>
               {currentTodos.todoList.map((todo, index) => {
                  return <Todo key={index} todo={todo} />
               })}
            </>
         )}
         <DispatchForm
            inputPlaceholder='Постирать все носки в доме...'
            btnText='Добавить задачу'
            dispatch={(inputValue) => {
               dispatch({
                  type: 'ADD_TODO',
                  payload: { title: inputValue, completed: false, id: Date.now() },
               })
            }}
         />
      </div>
   )
}

export default TodosInfo
