import { combineReducers } from 'redux'
import { todos, todosList } from './todosReducers'

const todosListArray = [
   {
      id: 0,
      title: 'first todos',
      todoList: [
         { title: 'first todo', completed: false, id: 0 },
         { title: 'second todo', completed: true, id: 1 },
      ],
   },
   {
      id: 1,
      title: 'secondf todos todosssss',
      todoList: [{ title: 'first todo', completed: false, id: 2 }],
   },
   {
      id: 2,
      title: 'third todos',
      todoList: [{ title: 'first todo', completed: true, id: 3 }],
   },
]

const initalState = { todosList: todosListArray, todos: todosListArray[0] }

// custom combineReducers for passing todosList to todos reducer
const rootReducer = (state = initalState, action) => {
   return {
      todos: todos(state.todos, { ...action, todosList: state.todosList }), // passing in action todosList object
      todosList: todosList(state.todosList, action),
   }
}

export default rootReducer
