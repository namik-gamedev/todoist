import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'
import App from './App'
import reducer from './reducers/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = legacy_createStore(reducer)

root.render(
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>
)
