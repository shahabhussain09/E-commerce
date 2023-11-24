import React from 'react'
import '../Newslatter/newlatters.css'
const Newslatter = () => {
  return (
    <div className='newlatter'>
       <h1>Get Exlcusive Offers On Your Email</h1>
       <p>Subcribe to our newlatter and stay update</p>
       <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
       </div>
    </div>
  )
}

export default Newslatter