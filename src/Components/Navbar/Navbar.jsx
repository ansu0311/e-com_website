import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { ShopContext } from "../../Context/ShopContext";
import logo from '../Assets2/cloth_logo.png'
import cart_icon from '../Assets2/bag_light.png'
import Bars from "../Assets2/Dropdown.png";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {getTotalCartItem } = useContext(ShopContext);
    const [menu,setMenu] = useState("shop")

    const mobile = window.innerWidth <= 426 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='navContainer'>
      <div className='placekeeper'></div>
    <div className='navbar'>
        <dir className ="nav-logo">
            <img src={logo} alt="app logo"/>
            <p><span>Hue</span>Harmony</p>
        </dir>
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0rem",
              borderRadius: "0,",
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img src={Bars} alt="" className="bar_logo" />
          </div>
        ) : (
        <ul className='nav-menu'>
            <li onClick={() => {setMenu("shop");setMenuOpened(false)}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/">Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("mens");setMenuOpened(false)}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/men">Men</Link>{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("womens");setMenuOpened(false)}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/women">Women</Link>{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids");setMenuOpened(false)}}><Link style={{textDecoration:'none', color:"var(--lightText)" }} to = "/kids">Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
        </ul>)}
        <div className='nav-login-cart'>
        <Link to = "/login"><button>Login</button></Link>
        <Link to = "/cart"><img src={cart_icon} alt="cart logo" /></Link>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div>
    </div>
    </div>
  )
}

export default Navbar