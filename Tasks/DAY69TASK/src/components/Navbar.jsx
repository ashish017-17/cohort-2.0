import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className="logo">Horizon Courts</div>

        <div className="menu">
            <h4 className='border'>About Us</h4>
            <h4>Services</h4>
            <h4>Coaches</h4>
            <h4>Events</h4>
            <h4>Contacts</h4>
        </div>

        <div className='button'>
            <button> Book now  </button>
        </div>


    </div>
  )
}

export default Navbar