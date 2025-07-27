import React, { useState } from 'react'
import TodoItems from './TodoItems'
import toast from 'react-hot-toast'
import axios from 'axios'


const Hero = () => {
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error("Title can't be empty");
      return;
    }

    const status = isCompleted ? 'completed' : 'pending'

    try {
      const response = await axios.post('http://localhost:5001/api/todos', {title, status });
     
      toast.success("Todo created successfully!");
      setTitle('')
      setIsCompleted(false)
    } catch (error) {
      console.error("Error creating a todo.", error)
      toast.error("error creating Todo.")
    }
  }

  console.log(title)
  return (
    <div className='bg-[#9BD9DA] min-h-screen flex flex-col items-center pt-8'>
      <form className='flex items-center' onSubmit={handleSubmit}>
        <input 
          className='bg-white px-5 py-3 w-[800px] text-2xl rounded-tl-4xl rounded-bl-4xl outline-none' type="text" 
          placeholder='Add new note here...' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type='submit' className='bg-[#FF5845] px-5 py-3 rounded-tr-4xl rounded-br-4xl text-2xl text-white font-bold cursor-pointer'>ADD</button>
      </form>
      <div className='flex flex-col gap-5 mt-10'>
        <TodoItems />
      </div>
    </div>
  )
}

export default Hero
