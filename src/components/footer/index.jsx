import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faGithub, faTelegram, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__links">
        <a href="mailto:biodasturchi@gmail.com" target="_blank" >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://scholar.google.com.ua/citations?user=Jg1NyB8AAAAJ&hl=en" target="_blank" >
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="https://github.com/biodasturchi" target="_blank" >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://t.me/ilosrim" target="_blank" >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://instagram.com/ilosrim" target="_blank" >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/ilosrim" target="_blank" >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://youtube.com" target="_blank" >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="footer__desc">
        <span>
          &copy;{new Date().getFullYear()} <code><b>ilosrim</b></code>  |  <span className='heart'>&#x2764;</span> ila <FontAwesomeIcon icon={faKeyboard} /> yordamida siz uchun!
        </span>
      </div>
    </div>
  )
}

export default Footer