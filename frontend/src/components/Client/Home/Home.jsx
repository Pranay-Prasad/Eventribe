import React from 'react'
import './Home.css'
import bg from './bg.jpg'
const Home = (props) => {
  const {user} = props;
  return (
      <section id='home'>
        <div className="bg">
          <img className='bgimg' src={bg} alt="bg" />
        </div>
          <div className="home_heading">
            <h1>{user.Name}</h1>
            <h3>{user.Tagline}</h3>
          </div>
          <div className="home_btn">
            <button className='btn_client'>Events</button>
          </div>
      </section>
  )
}

export default Home