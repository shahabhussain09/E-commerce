import React from 'react'
import './Footer.css'
import logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import print from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className=' footer'>
    <div className="footer-logo">
        <img src={logo} alt="" />
        <p>SHOPPERS</p>
    </div>
    <ul className="footer-links">
        <li>Compaany</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icons-container">
           <img src={insta} alt="" />
        </div>

        <div className="footer-icons-container">
           <img src={print} alt="" />
        </div>

        <div className="footer-icons-container">
           <img src={whatsapp} alt="" />
        </div>
    </div>
    <div className="footer-copy-right">
        <hr />
        <p>copy right @ 2023 all right reserved</p>
    </div>
    </div>
  )
}

export default Footer