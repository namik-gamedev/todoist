import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import TodosInfo from './components/todosInfo/TodosInfo'
import Footer from './components/footer/Footer'
import Modal from './components/UI/modal/Modal'
import Button from './components/UI/button/Button'
import DispatchForm from './components/UI/dispatchForm/DispatchForm'

function App() {
   return (
      <div className='App'>
         <Header />
         <Sidebar />
         <TodosInfo />
         <Footer />
      </div>
   )
}

export default App
