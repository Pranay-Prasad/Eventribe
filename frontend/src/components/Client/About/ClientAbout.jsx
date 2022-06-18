import React from 'react'
import './ClientAbout.css'
const ClientAbout = (props) => {
  const{user} = props
  return (
      <section id='clientabout'>
          <div className="clientabout_container">
              <h2>About us</h2>
              <div className="clientabout_info">
                <p>{user.About}</p>
              </div>
          </div>
      </section>
  )
}

export default ClientAbout