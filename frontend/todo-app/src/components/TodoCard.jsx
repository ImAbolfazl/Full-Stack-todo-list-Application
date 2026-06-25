import React, { useRef, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { FaPen } from "react-icons/fa";
import axios from 'axios';


const TodoCard = ({task, completed, id, onDelete}) => {
    const [toggleEdit, setToggleEdit] = useState(false)
    const token = localStorage.getItem("token")
    const [currentTask, setCurrentTask] = useState(task)
    

    const updateTodo = async () => {
        try{
            const response = await axios({
                method: "put",
                url: import.meta.env.VITE_BACKEND_URL + `/todo/${id}`,
                headers: {
                    token: token
                },
                data: {
                    task: currentTask
                }
            })

            const data = response.data

            if(data){
                setCurrentTask(data.task)
            }

        }catch(err){
            console.log(err);
        }
    }

    const deleteTodo = async () => {
        try{
            onDelete(id)
            await axios({
                method: "delete",
                url: import.meta.env.VITE_BACKEND_URL + `/todo/${id}`,
                headers: {
                    token: token
                }
            })
        }catch(err){
            console.log(err);
        }
    }

  return <>
    <div className='flex gap-4 items-center border-black border p-4 rounded-2xl md:w-[60vh] justify-between'>
        <div className='flex-1 flex justify-start items-center'>
            <input className={`flex-1 outline-none p-3 pb-0 text-xl ${toggleEdit && "border-b border-black"}`} type="text" value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} readOnly={!toggleEdit}/>
        </div>
        <div className='flex gap-3'>
            {toggleEdit ? (
                <FaCheck className='text-2xl cursor-pointer' onClick={() => {
                    setToggleEdit(prev => !prev)
                    updateTodo()
                }}/>
            ) : (
                <FaPen className='text-2xl cursor-pointer' onClick={() => setToggleEdit(prev => !prev)}/>
            )}
            <ImBin2 className='cursor-pointer text-2xl fill-red-800' onClick={deleteTodo}/>
        </div>
    </div>
  </>
}

export default TodoCard