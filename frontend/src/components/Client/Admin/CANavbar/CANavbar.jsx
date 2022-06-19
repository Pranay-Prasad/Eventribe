import React from 'react'
import {AiOutlineDashboard} from 'react-icons/ai'
import {MdEventAvailable} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {FaSignOutAlt} from 'react-icons/fa'
import './CANavbar.css'
const CANavbar = () => {
  return (
      <section className="CANavbar">
          <div className="CA_logo">
              <h2>Blaze</h2>
          </div>
          <ul className="CA_nav_links">
              <li><AiOutlineDashboard className='CA_nav_icon'/><a href="#" className="CA_nav_item">Dashboard</a></li>
              <li><MdEventAvailable className='CA_nav_icon'/><a href="#" className="CA_nav_item">Host Event</a></li>
              <li><FiEdit className='CA_nav_icon'/><a href="#" className="CA_nav_item">Edit Information</a></li>
              <li><FaSignOutAlt className='CA_nav_icon'/><a href="#" className="CA_nav_item">Signout</a></li>
          </ul>
      </section>
  )
}

export default CANavbar