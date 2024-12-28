import React from 'react'
import './navbar.css'
import search from '../../Assets/search-w.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className='title'>AskIt</h2>
        <div className="search-box">
            <input type="text" placeholder='search' />
            <img src={search} alt="" className='search'/>
        </div>
        <ul>
            <li>Support</li>
            <li>Notification</li>
            <li>English</li>
            <li>Sign in</li>
            <li className='signup'>Sign Up</li>
        </ul>
    </div>
  )
}

export default Navbar