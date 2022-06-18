import React from 'react'
import './Tcontact.css'
const Tcontact = () => {
  return (
      <section className="section tcontact" id="tcontact">
          <div className="container">
              <h2 className="h2 section_title underline">Contact US</h2>
              <div className="contact_container">
                  <form>
                      <input type="text" placeholder='Your Full Name'/>
                      <input type="email" placeholder='Your Email Adress' />
                      <textarea name="message" id="message" placeholder='Your Message' rows="10" cols='30'></textarea>
                      <button className='button_submit'>Submit</button>
                  </form>
              </div>
          </div>
      </section>
  )
}

export default Tcontact