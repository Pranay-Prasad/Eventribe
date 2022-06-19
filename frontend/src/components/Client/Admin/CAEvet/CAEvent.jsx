import React from 'react'
import './CAEvent.css'
const CAEvent = () => {
  return (
      <section className="CAEvent">
          <div className="Event_logo">
              <h2>Host Event</h2>
          </div>
          <div className="new_event">
              <a href="#" className="new_event_btn">New Event</a>
          </div>
          <ul className="event_info">
              <li className="event_card">
                  <h2>Current Opening</h2>
                  <div className="event_col">
                      <small>12-06-15</small>
                      <h3>TRIbe</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <a href="#">Data Entries</a>
                  </div>
              </li>
              <li className="event_card">
                  <h2>Past Event</h2>
                  <div className="event_col">
                      <small>12-06-15</small>
                      <h3>TRIbe</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </div>
              </li>
          </ul>
      </section>
  )
}

export default CAEvent