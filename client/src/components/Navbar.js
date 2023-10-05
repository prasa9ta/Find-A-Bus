import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className='nav-logo'>
                <img width={200} src={logo} alt='pras'/>
            </div>

            <div className='nav-title'>
                <h2>Yatra Sukhad Hoi</h2>
            </div>

            <div className='nav-items'>
               
                    <ul><a href='/' >Home</a></ul>
                    <ul><a href='/add' >Add a Route</a></ul>
                    <ul><a href='/report' >Report</a></ul>
              
            </div>
        </div>
    </>
  )
}

export default Navbar
