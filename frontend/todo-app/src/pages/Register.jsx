import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate } from 'react-router'
import axios from "axios"
import dontenv from "dotenv"

const Register = () => {
    const [error, setError] = useState(null)
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const navigation = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("token")){
                navigation("/")
        }
    }, [])

    const registerUser = async () => {
        const {username, password} = data
        if(!username || !password){
            setError("please enter username and password!")
        }else if(username && password){
            try{
                const response = await axios({
                    method: "post",
                    url: import.meta.env.VITE_BACKEND_URL + "/auth/register",
                    data: {
                        username: username.trim(),
                        password: password.trim()
                    }
                })
                const data = await response.data

                if(data){
                    localStorage.setItem("token", data.token)
                    navigation("/")
                }
            }catch(err){
                if(err.status == 500){
                    setError("username is already taken!")
                }
            }
        }
    }

  return <>
    <div className='flex flex-col items-center justify-around h-[60vh]'>
        <h1 className='text-5xl font-bold'>Register</h1>
        <div className='bg-[#18181b] p-3 md:p-10 rounded-xl max-md:text-xs'>
            <div className='flex gap-4 flex-col'>
                {error && (<span className='text-red-800 font-bold'>{error}</span>)}
                <div className='flex flex-col'>
                    <span>username:</span>
                    <input className='w-80 h-10 outline-none p-3 border-b border-black' value={data.username} type="text" placeholder='Enter Your Username' onChange={(e) => setData(prev => ({...prev, username: e.target.value}))}/>
                </div>
                <div className='flex flex-col'>
                    <span>password:</span>
                    <input className='w-80 h-10 outline-none p-3 border-b border-black' value={data.password} type="password" placeholder='Enter Your Password' onChange={(e) => setData(prev => ({...prev, password: e.target.value}))}/>
                </div>
                <button className='text-1xl font-bold cursor-pointer' onClick={registerUser}>Register</button>
            </div>
            <Link to={"/login"} className='font-bold'>Login</Link>
        </div>
    </div>
  </>
}

export default Register