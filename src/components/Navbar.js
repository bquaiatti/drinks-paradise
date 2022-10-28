import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='nav-center'>
    <ul className='nav-links'>
    <li>
    <Link to='/'>
      <strong>Drinks Paradise <span role="img" aria-labelledby="drink">🍹</span></strong>
    </Link>
    </li>
    <li>
      <Link to='/'>
        Home
      </Link>
    </li>
    <li>
    <Link to='/about'>
        About
      </Link>
    </li>
</ul>
    </div>
    </nav>
  )
}

export default Navbar
