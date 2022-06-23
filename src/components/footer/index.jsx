import './footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__links">
        <a href="mailto:biodasturchi@gmail.com" target="_blank" >
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="https://scholar.google.com.ua/citations?user=Jg1NyB8AAAAJ&hl=en" target="_blank" >
          <i class="fa-brands fa-google"></i>
        </a>
        <a href="https://github.com/biodasturchi" target="_blank" >
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://t.me/ilosrim" target="_blank" >
          <i class="fa-brands fa-telegram"></i>
        </a>
        <a href="https://instagram.com/ilosrim" target="_blank" >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com/ilosrim" target="_blank" >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="footer__desc">
        <span>
          &copy;{new Date().getFullYear()} <code><b>ilosrim</b></code>  |  <span className='heart'>&#x2764;</span> ila <i class="fa-solid fa-keyboard"></i> yordamida siz uchun!
        </span>
      </div>
    </div>
  )
}

export default Footer