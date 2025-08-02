import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://todo-app-ypai.onrender.com/api/auth/signup", {
        username,
        email, 
        password
      })
      console.log(res)
      if(res.status === 201) {
        toast.success("User Signed Successfully!")
      } else if(res.status === 400) {
        toast.error("User Already Exist!")
      }
      setUsername('');
      setEmail('');
      setPassword('');
      
      navigate("/login");

    } catch (error) {
        console.log(error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Sign up failed");
    }
  }


  return (
    <div className='flex items-center justify-center min-h-screen  py-4'>
      <div className='grid md:grid-cols-2 w-[90%] md:w-[50%] mx-autox bg-white h-[90%] md:h-[70vh] rounded-2xl md:px-6 md:py-10 shadow-2xl shadow-black' >
        <form onSubmit={(e) => handleSignUp(e)} className='flex flex-col items-center md:py-5'>
          <h1 className='text-4xl font-bold pb-3'>Sign Up</h1>
          <input
            className='px-4 py-3 md:py-5 text-xl md:text-2xl mt-3 md:m-4 border border-gray-700 rounded-xl font-semibold' 
            type="text" 
            name='username'  
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
            <input
              className='px-4 py-3 md:py-5 text-xl md:text-2xl mt-3 md:m-4 border border-gray-700 rounded-xl font-semibold' 
              type="text" 
              name='email' 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          <input
            className='px-4 py-3 md:py-5 text-xl md:text-2xl mt-3 md:m-4 border border-gray-700 rounded-xl font-semibold' 
            type="text" 
            name='password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type='submit'
            className='bg-[#0cddcb] text-black px-7 py-3 rounded-full font-bold text-2xl mt-3 cursor-pointer'
          >
            Sign Up
          </button>

          <p className='text-xl pt-3'>Already have an accounnt?<Link to={"/login"} className='text-blue-600'> Login</Link></p>
        </form>
        <div className='order-first md:order-last mb-5 md:mt-10 flex justify-center'>
          <img src="public/signup.jpeg" alt="image" className="w-[300px]  md:w-[600px] h-auto object-cover" />
        </div>
      </div>
    </div>
  ) 
}

export default SignUp

