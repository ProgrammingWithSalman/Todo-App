import React, { useEffect, useState } from 'react'
import TodoItems from './TodoItems'
import toast from 'react-hot-toast'
import axios from 'axios'


const Hero = () => {
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/todos")
      setTodos(res.data);
      console.log(res.data)
    } catch (error) {
      console.error("Error getting Todos");
      toast.error("Failed to load todos");
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (todo) => {
    setEditId(todo._id);
    setTitle(todo.title);
    setIsCompleted(todo.status === "completed");
  };

    
    
  const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!title.trim()) {
        toast.error("Title can't be empty");
        return;
      }

      const status = isCompleted ? 'completed' : 'pending'

      try {
        if(editId) {
          await axios.put(`http://localhost:5001/api/todos/${editId}`, {title, status });
          toast.success("Todo Updated!");
        } else {
          await axios.post('http://localhost:5001/api/todos/', {title, status});
          toast.success("Todo created!");
        }
        setTitle('')
        setIsCompleted(false);
        fetchTodos();
        setEditId(null);
      } catch (error) {
        console.error("Error creating a todo.", error)
        toast.error("error creating/updating Todo.")
      }
    }
    console.log(title)

    

    return (
      <div className='bg-[#9BD9DA] min-h-screen  flex flex-col items-center pt-8'>
        <form className='flex items-center justify-center md:w-[900px] md:ml-[5px] w-[400px]' onSubmit={handleSubmit}>
          <input 
            className='bg-white px-5 py-3 w-[300px] md:text-2xl md:w-[800px]  rounded-tl-4xl rounded-bl-4xl outline-none' type="text" 
            placeholder='Add new note here...' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
         
           <button type='submit' className='bg-[#FF5845] px-5 py-3 rounded-tr-4xl rounded-br-4xl md:text-2xl text-white font-bold cursor-pointer'>{editId ? 'UPDATE' : 'ADD'}</button>
    
        </form>
        {todos.length === 0 && <div className='flex flex-col h-100 text-3xl items-center text-white font-bold justify-center'>
          <p className='text-center'>There is no Todo here yet!</p>
          <p className='text-2xl'>Add a todo.</p>
        </div> }
        <div className='flex flex-col gap-2 md:gap-5 mt-10  justify-center items-center mb-5'>
          <TodoItems todos={todos} onEdit={handleEdit}  fetchTodos={fetchTodos}/>
        </div>
      </div>
    )
}

export default Hero
