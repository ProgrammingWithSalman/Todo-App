import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const token = localStorage.getItem('token')

  const handleAuthClick = () => {
    if(token) {
      localStorage.removeItem('token')
      navigate("/login")
    } else {
      navigate("signup")
    }
  }

  return (
    <div className='flex justify-around p-4 items-center bg-[#9BD9DA] text-white'>
      <div>
        <Link to={"/"} className="logo text-3xl font-bold">Todoist</Link>
      </div>
      <div className='hidden md:flex text-2xl gap-8 items-center'>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Explore</Link>
        <Link to={"/"}>About</Link>
        <button onClick={handleAuthClick} className='bg-[#FF5845] px-5 py-2 rounded-4xl cursor-pointer'>{token ? "Log Out": "Sign Up"}</button>
      </div>

       {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-4 w-full bg-blue-600  shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to={"/"}>Home</Link>
        <Link to={"/"}>Explore</Link>
        <Link to={"/"}>About</Link>
        <button onClick={handleAuthClick} className='bg-[#FF5845] px-5 py-2 rounded-4xl cursor-pointer'>{token ? "Log Out" : "Sign Up"}</button>
        </div>
      )}

    </div>
  )
}

export default Navbar
