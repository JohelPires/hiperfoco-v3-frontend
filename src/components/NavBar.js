import React from 'react'
import '../styles/navbar.css'

function NavBar() {
  return (
    <nav>
      <div className='logo'>
        <h1>Hiperfoco</h1>
      </div>
      <div className='menu-container'>
        <ul className='menu'>
          <li>
            <a href='#'>Sobre</a>
          </li>
          <li>
            <a href='#'>Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
