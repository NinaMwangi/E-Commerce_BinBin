import React, {useState}from 'react'
import './Navbar.css'
import logo from '../Assets/binbin_logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu,setMenu] = useState('shop');

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>BinBin</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('skin care')}}><Link to='/'>Skin Care</Link>{menu==='skin care'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('body care')}}><Link to='/'>Body Care</Link>{menu==='body care'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('accessories')}}><Link to='/'>Accessories</Link>{menu==='accessories'?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar