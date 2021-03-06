import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar__links">
        <div className="navbar__links-logo">
          <Link to="/">
            <img src={logo} alt="Bilolab" />
          </Link>
          <Link to="/">
            <span>Plant Cytoprotectors Lab.</span>
          </Link>
        </div>
        <div className="navbar__links-container">
          <Link className='tooltip' to="/">Home
            <div className="tooltiptext">Home section</div>
          </Link>
          <Link className='tooltip' to="/research">Research
            <div className="tooltiptext">Published works</div>
          </Link>
          <Link className='tooltip' to="/blog">Blog
            <div className="tooltiptext">Blog section</div>
          </Link>
          <Link className='tooltip' to="/team">Team
            <div className="tooltiptext">About our team</div>
          </Link>
          <Link className='tooltip' to="/contact">Contact
            <div className="tooltiptext">Email, adress and location</div>
          </Link>
        </div>
      </div>
      <div className="navbar__menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar__menu_container scale-up-center">
            <div className="navbar__menu_container-links">
              <Link to="/">Home</Link>
              <Link to="/research">Research</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/team">Team</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar