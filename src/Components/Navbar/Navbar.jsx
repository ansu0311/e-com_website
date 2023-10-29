import React, { useContext, useState } from 'react'
import './Navbar.css'
import { ShopContext } from "../../Context/ShopContext";
import logo from '../Assets2/cloth_logo.png'
import cart_icon from '../Assets2/bag_light.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {getTotalCartItem } = useContext(ShopContext);
    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
        <dir className ="nav-logo">
            <img src={logo} alt="app logo"/>
            <p><span>Hue</span>Harmony</p>
        </dir>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/">Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/men">Men</Link>{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/women">Women</Link>{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/kids">Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
        <Link to = "/login"><button>Login</button></Link>
        <Link to = "/cart"><img src={cart_icon} alt="cart logo" /></Link>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar