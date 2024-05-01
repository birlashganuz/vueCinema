import React from 'react'
import logo from '../assets/images/logo.png'

const Nav = ({nav_menu}) => {
  return (
    <div className="nav__box">
      <a href="#!" className="nav__logo">
        <img src={logo} alt="" />
        <span>CINEMAS</span>
      </a>
      <ul className="nav__list">
        {
          nav_menu.map(link => (
            <li key={link.name}>
              <a className='nav__link' href={link.href}><span>{link.name}</span></a>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default Nav