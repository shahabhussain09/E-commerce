import React, { useContext, useState } from 'react'
import '../Navbar/navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { shopContext } from '../../context/ShopContext'
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getToatalCartItem } = useContext(shopContext)
  return (
    <div className=' navbar'>
     <div className="nav-logo">
     <img src={logo} alt="" />
     <Link to='/'><p>S.Shopper</p></Link>
     </div>
     <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu === "men" ? <hr /> : <></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu === "women" ? <hr /> : <></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/Kids'>Kid</Link> {menu === "kids" ? <hr /> : <></>}</li>
     </ul>
     <div className="nav-login-card">
       <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getToatalCartItem()}</div>
     </div>
    </div>
  )
}

export default Navbar