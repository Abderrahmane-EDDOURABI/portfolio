import React from 'react'
import './footer.css';
import { useSelector } from 'react-redux';

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <footer className={`footer ${theme}`}>
      <div className={`container footer__container grid ${theme}`}>
        <ul className="footer__links">
          <li><a href="#home" className='footer__link'>Home</a></li>
          <li><a href="#about" className='footer__link'>About</a></li>
          <li><a href="#services" className='footer__link'>Services</a></li>
          <li><a href="#projects" className='footer__link'>Projects</a></li>
          <li><a href="#contact" className='footer__link'>Contact</a></li>
        </ul>
        <div className="footer__copy">
          <span>&#169; All Rights Reserved by</span> 
          <a href="#">Abderrahmane EDDOURABI.</a>
          <span>❤️</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer