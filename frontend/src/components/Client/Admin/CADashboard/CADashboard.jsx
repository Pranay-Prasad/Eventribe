import React from 'react'
import {AiOutlineDashboard} from 'react-icons/ai'
import {MdEventAvailable} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi'
import {FaSignOutAlt} from 'react-icons/fa'
import './CADashboard.css'
const CADashboard = () => {
  return (
      <section className="Dashboard">
          <div className="Dashboard_logo">
            <h2>Dashboard</h2>
          </div>
          <div className="dashboard_item">
              <ul className="dashboard_nav">
                  <li><a href="#" className="dashboard_links"><h3>Events Hosted</h3> <p>759 </p></a></li>
                  <li><a href="#" className="dashboard_links"><h3>Host Event</h3><MdEventAvailable className='dashboard_icon'/></a></li>
                  <li><a href="#" className="dashboard_links"><h3>Edit Information</h3><FiEdit className='dashboard_icon'/></a></li>
                  <li><a href="#" className="dashboard_links"><h3>Signout</h3><FaSignOutAlt className='dashboard_icon'/></a></li>
              </ul>
          </div>
      </section>
  )
}

export default CADashboard