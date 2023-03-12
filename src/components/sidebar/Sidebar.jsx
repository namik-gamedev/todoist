import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DispatchForm from '../UI/dispatchForm/DispatchForm'
import cl from './Sidebar.module.css'
import Todos from './todos/Todos'

const Sidebar = () => {
   const todosList = useSelector((store) => store.todosList)
   const dispatch = useDispatch()

   return (
      <div className={`${cl.sidebar} App__block`}>
         <div className={cl.sidebar__wrapper}>
            <h2 className={cl.sidebar__userName}>You(Maxim Maximich)</h2>
            <ul className={cl.sidebar__list}>
               {todosList.map((todos) => (
                  <Todos key={todos.id} todos={todos} />
               ))}
            </ul>

            <DispatchForm
               inputPlaceholder='Домашние дела...'
               btnText='Добавить задачу'
               dispatch={(inputValue) =>
                  dispatch({
                     type: 'ADD_TODOS',
                     payload: { title: inputValue, id: Date.now(), todoList: [] },
                  })
               }
            />
         </div>
      </div>
   )
}

export default Sidebar
