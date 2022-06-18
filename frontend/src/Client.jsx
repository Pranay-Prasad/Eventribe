import React from 'react'
import ClientAbout from './components/Client/About/ClientAbout';
import ClientFooter from './components/Client/Footer/ClientFooter';
import Home from './components/Client/Home/Home';
import Navbar from './components/Client/Navbar/ClientNavbar'

const Client = (props) => {
    const {user} = props;
  return (
      <>
        <Navbar user={user} />
        <Home user={user}/>
        <ClientAbout user={user}/>  
        <ClientFooter user={user}/>
      </>
  )
}

export default Client