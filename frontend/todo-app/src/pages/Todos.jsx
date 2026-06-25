import React, { useEffect, useRef, useState } from 'react'
import {Link, useNavigate} from "react-router"
import TodoCard from '../components/TodoCard'
import { FaCheck } from "react-icons/fa";
import axios from 'axios';


const Todos = () => {
  const [token, setToken] = useState(localStorage.getItem("token")) 
  const [todos, setTodos] = useState([])
  const todoRef = useRef(null)
  const navigation = useNavigate()

  useEffect(() => {
    if(!token){
      navigation("/login")
    }
  }, [token])

const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
};

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    location.reload()
  }

  useEffect(() => {
    const getTodos = async () => {
      try{
        const response = await axios({
          method: "get",
          url: import.meta.env.VITE_BACKEND_URL + "/todo",
          headers: {
            token: token
          }
        })

        const data = await response.data

        if(data){
          setTodos(data)
        }
      }catch(err){
        console.log(err);
      }
    }

    getTodos()
  }, [])

  const addTodo = async () => {
    const task = todoRef.current.value
    if(!task.trim()){
      
    }else{
      try{
        const response = await axios({
          method: "post",
          url: import.meta.env.VITE_BACKEND_URL + "/todo",
          data: {
            task: task
          },
          headers: {
            token: token
          }
        })

        const data = await response.data
        

        if(data){
          setTodos(prev => ([...prev, data]))

          todoRef.current.value = ""
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  



  return <>
  {token == null ? (
    <Link to={"/login"} className='absolute top-4 left-4 bg-[#9E9E9E] p-2 rounded-xs font-bold'>Login | Register</Link>
  ) : (
    <Link onClick={logout} className='absolute top-4 left-4 bg-[#9E9E9E] p-2 rounded-xs font-bold'>Log out</Link>
  )}
    <div className='flex items-center justify-between flex-col pt-20 md:pt-2 gap-20'>
        <div className='flex flex-col gap-15 items-center'>
            <h1 className='font-bold text-3xl md:text-5xl'>Todo Application!</h1>
            <div className='flex items-center gap-6'>
                <input className='outline-none border-b border-black px-3 py-1 md:text-2xl md:w-160' type="text" placeholder='Enter your new todo' ref={todoRef}/>
                <span className='font-bold cursor-pointer md:text-2xl' onClick={addTodo}>Add</span>
            </div>
        </div>
        <div className='w-screen flex items-center flex-col gap-4'>
            {todos && todos.sort((a, b) => b.completed - a.completed).map((todo) => (
              <TodoCard key={todo.id} task={todo.task} completed={todo.completed} id={todo.id} onDelete={handleDelete}/>
            ))}
        </div>
    </div>
  </>
}

export default Todos