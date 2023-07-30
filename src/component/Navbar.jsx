import React from 'react'
import './styles/navbar.css'
import { ReactComponent as ArrowDown } from './../assets/arrowdown.svg'
import { ReactComponent as Cart } from './../assets/cart.svg'
const Navbar = () => {
  return (
    <div className='navBar'>
        <div className="container">
            <div className="navBarBrand">
                <h1>BETASTAY</h1>
            </div>
            <ul className='navBarList'>
                <li className='active'>Home</li>
                <li>About</li>
                <li>Property</li>
                <li>Contact Us</li>
            </ul>
            <div className="navBarActivity">
                <ArrowDown />
                <Cart />
                <button className="login">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar