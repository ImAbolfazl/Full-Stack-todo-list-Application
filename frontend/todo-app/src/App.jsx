import React from 'react'
import {Routes, Route} from "react-router"
import Todos from './pages/Todos'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token")

      !token && setLoading(true)

      if(token){
        try{
            await axios({
              method: "get",
              url: import.meta.env.VITE_BACKEND_URL + "/auth/check",
              headers: {
                token: token
              }
          })
        }catch(err){
          err.status == 401 && localStorage.removeItem("token")
        }finally{
          console.log("asdasd");
          
          setLoading(true)
        }
      }
    }

    checkToken()
  }, [])

  if(!loading){
    return <div className='h-screen flex items-center justify-center'>
      <span>Loading...</span>
    </div>
  }

  return <Routes>
    <Route path='/' element={<Todos/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
  </Routes>
}

export default App