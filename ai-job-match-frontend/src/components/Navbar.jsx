import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/home" className="text-blue-600 font-semibold">Home</Link>
        <Link to="/profile" className="text-blue-600 font-semibold">Profile</Link>
        <Link to="/jobs" className="text-blue-600 font-semibold">Jobs</Link>
      </div>
      <LogoutButton />
    </nav>
  )
}

export default Navbar