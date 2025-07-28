import axios from 'axios'
import toast from 'react-hot-toast'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'



const TodoItems =   ({ todos, onEdit, fetchTodos }) => {
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/todos/${id}`)
      toast.success("Deleted successfully!");
      fetchTodos();
    } catch (error) {
      console.error("error deleting todo")
      toast.error("Error deleting todo")
    }
  }


  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5001/api/todos/${id}`, {
        status: newStatus,
      });
      fetchTodos(); // Reload updated list
    } catch (error) {
      console.error("Error updating status");
      toast.error("Failed to update status");
    }
  };

  const handleUpdate = (todo) => {
  onEdit(todo); // Sends data up to Hero.jsx
};


  return (
    <div className='flex flex-col gap-3'>
    {todos.map((todo, _i) => (

    <Link to={`/${todo._id}`} key={_i} className='md:w-[1000px] w-[350px] max-w-3xl flex items-center justify-between  bg-[#ECFAF3] px-3 py-4 md:px-4 md:py-5 gap-2 md:gap-5 rounded-md md:rounded-xl cursor-pointer'>
      <input 
        type="checkbox" 
        className='size-5 md:size-7 shrink-0'
        checked={todo.status === "completed" ? true : false }
        onChange={(e) => handleStatusChange(todo._id,  e.target.checked ? "completed" : "pending" )}
      />
      <span className={`md:text-2xl text-md font-[500] whitespace-nowrap truncate overflow-hidden max-w-2xl flex-1 ${todo.status === "completed" ? "line-through" : ""}`}>{todo.title}</span>
      <div className='flex items-center text-2xl md:text-4xl ml-3 gap-2 shrink-0'>
        <button className='cursor-pointer' onClick={() => handleUpdate(todo)}>
          <FiEdit />
        </button>
        <button className='cursor-pointer' onClick={() => handleDelete(todo._id)}>
          <FiTrash2 className='text-red-600'/>
        </button>
      </div>

    </Link>
  ))}
  </div>
  )

}

export default TodoItems
