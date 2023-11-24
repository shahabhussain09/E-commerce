import React from 'react'
import './hero.css'
import handicon from '../Assets/hand_icon.png'
import arrowicon from '../Assets/arrow.png'
import heroimg from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className=' hero'>
        <div className="hero-left">
           <h2>NEW ARRIVALS ONLY</h2>
           <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={handicon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
           </div>
           <div className="hero-latest-btn">
            <p>latest collection</p>
            <img src={arrowicon} alt="" />
           </div>
        </div>

        <div className="hero-right">
           <img src={heroimg} alt="" />
        </div>
    </div>
  )
}

export default Hero