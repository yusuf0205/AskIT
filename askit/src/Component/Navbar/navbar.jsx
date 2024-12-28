import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>AskIt</h2>
        <div className="search-box">
            <input type="text" placeholder='search' />
            <img src={search-b} alt="" />
        </div>
        <ul>
            <li>Support</li>
            <li>Notification</li>
            <li>English</li>
            <li>Sign in</li>
        </ul>
    </div>
  )
}

export default Navbar