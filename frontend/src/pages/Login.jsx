import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://todo-app-ypai.onrender.com/api/auth/login", { email, password})
      toast.success("User Logged-In Successfully")

      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

      setEmail('');
      setPassword('');
      navigate("/")
    } catch (error) {
      console.error("Error during LOGIN");
      toast.error("Invalid Credentials");
    }
  }
 return (
    <div className='flex items-center justify-center min-h-screen  py-4'>
      <div className='flex flex-col md:grid md:grid-cols-2 w-[90%] md:w-[70%] lg:w-[50%] mx-auto bg-white h-[90%] lg:h-[70vh] rounded-2xl pb-7 md:px-6 md:py-10 shadow-2xl shadow-black' >
        <form onSubmit={(e) => handleLogin(e)} className='flex flex-col items-center justify-center md:py-5'>
          <h1 className='text-4xl font-bold pb-3'>Login</h1>
          <input
            className='px-4 py-3 md:py-4 text-xl md:text-xl mt-3 md:mb-3 border border-gray-700 rounded-xl font-semibold' 
            type="text" 
            name='email' 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='px-4 py-3 md:py-4 text-xl md:text-xl mt-3 md:mb-3 border border-gray-700 rounded-xl font-semibold' 
            type="text" 
            name='password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type='submit' className='bg-[#0cddcb] text-black px-7 py-3 rounded-full font-bold text-xl mt-5 cursor-pointer'>Login</button>

          <p className='text-xl pt-3'>Don't have an account?<Link to={"/signup"} className='text-blue-600'> Signup</Link></p>
      
        </form>
        <div className='order-first md:order-last md:mt-10 flex justify-center'>
          <img src="/Signup.jpeg" alt="image" className="w-[200px] sm:w-[300px]  md:w-[600px] h-auto object-cover" />
        </div>
      </div>
    </div>
  ) 
}

export default Login
