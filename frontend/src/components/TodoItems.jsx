import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import axios from 'axios'
import toast from 'react-hot-toast'

const TodoItems =   () => {
  const [todos, setTodos] = useState([]);
  console.log(todos)

  useEffect (() => {
     const fetchTodos = async () => {
     const res = await axios.get("http://localhost:5001/api/todos")
      setTodos(res.data)
    }
    fetchTodos();
  },[])

  const handleDelete = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete(`http://localhost:5001/api/todos/${id}`)
      toast.success("Deleted successfully!");
    } catch (error) {
      console.error("error deleting todo")
      toast.error("Error deleting todo")
    }
  }

  return (
    <div className='flex flex-col gap-3'>
    {todos.map((todo, _i) => (

    <div key={_i} className=' w-[1000px] max-w-3xl flex items-center justify-between  bg-[#ECFAF3] px-7 py-5  gap-7 rounded-xl'>
      <input type="checkbox" className='size-7 shrink-0 '/>
      <span className='text-2xl font-[500] whitespace-nowrap truncate overflow-hidden max-w-2xl flex-1'>{todo.title}</span>
      <div className='flex items-center text-4xl ml-3 gap-2 shrink-0'>
        <Link to={"/:id"}>
          <FiEdit />
        </Link>
        <button className='cursor-pointer' onClick={() => handleDelete(todo._id)}>
          <FiTrash2 className='text-red-600'/>
        </button>
      </div>

    </div>
  ))}
  </div>
  )

}

export default TodoItems
