import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around p-4 items-center bg-[#9BD9DA] text-white'>
      <div>
        <Link to={"/"} className="logo text-3xl font-bold">Todoist</Link>
        
      </div>
      <div className='text-2xl flex gap-8 items-center'>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Explore</Link>
        <Link to={"/"}>About</Link>
        <button className='bg-[#FF5845] px-5 py-2 rounded-4xl cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
