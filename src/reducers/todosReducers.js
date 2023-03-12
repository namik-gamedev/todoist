function todosList(state, action) {
   let targetTodosIndex = 0
   let newTodosList = []

   switch (action.type) {
      case 'ADD_TODOS':
         return [...state, action.payload]
      case 'REMOVE_TODOS':
         newTodosList = state
         if (state.length > 1) {
            targetTodosIndex = newTodosList.indexOf(action.payload)
            newTodosList.splice(targetTodosIndex, 1)
         }
         return [...newTodosList]
      case 'RENAME_TODOS':
         action.payload.todos.title = action.payload.title
         return [...state]
      default:
         return [...state]
   }
}

function todos(state, action) {
   let targetTodoIndex = 0
   let newTodoList = []

   switch (action.type) {
      case 'SET_FIRST_TODOS':
         return { ...action.todosList.at(0) }
      case 'SET_CURRENT_TODOS':
         return { ...action.payload }
      case 'ADD_TODO':
         newTodoList = state.todoList
         newTodoList.push(action.payload)
         return { ...state, todoList: newTodoList }
      case 'REMOVE_TODO':
         newTodoList = state.todoList
         targetTodoIndex = newTodoList.indexOf(action.payload)
         newTodoList.splice(targetTodoIndex, 1)
         return { ...state, todosList: newTodoList }
      case 'RENAME_TODO':
         action.payload.todo.title = action.payload.title
         return { ...state }
      case 'TOGGLE_TODO_COMPLETE':
         action.payload.todo.completed = !action.payload.todo.completed
         return { ...state }
      default:
         return { ...state }
   }
}

export { todos, todosList }
