import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useParams } from 'react-router-dom'

const TodoDetails = () => {
  const [todo, setTodo] = useState([])
  const { id } = useParams();

  const getTodoDetails = async () => {
    console.log(id)
    const todo = await axios.get(`https://todo-app-ypai.onrender.com/api/todos/${id}`)
    setTodo(todo.data)
  }

  useEffect(() => {
    getTodoDetails();
  }, [])
  return (
    <div className='flex items-center justify-center text-center bg-[#9BD9DA] text-black min-h-screen'>
      <div className='bg-white  rounded-3xl px-7 py-10 text-black min-h-[300px] flex flex-col '>
        <h3 className='font-bold text-2xl md:text-3xl text-center text-wrap-nowrap w-80  md:w-[800px] min-h-5'>Title: {todo.title}</h3>

        <div className='flex items-center text-center  justify-between gap-5 mt-18'>

          <p className='text-green-700 text-2xl '>Status: {todo.status}</p>
          <div className='flex justify-end px-5 py-3 gap-3'>
            <FiEdit className='size-10' />
            <FiTrash2 className='size-10 text-red-600' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoDetails
