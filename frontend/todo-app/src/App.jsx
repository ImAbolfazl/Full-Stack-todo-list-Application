import React from 'react'
import {Routes, Route} from "react-router"
import Todos from './pages/Todos'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return <Routes>
    <Route path='/' element={<Todos/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
  </Routes>
}

export default App