import React from 'react';
import '../styles/navbar.css';
import {BiCart } from "react-icons/bi";


const Navbar = ({size, setShow}) => {
  return (
   <div>
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <h1 id="cart"><BiCart/></h1>
            <div className="cart" onClick={()=>setShow(false)}>
                <span id="span">
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
            <img src="https://images.freekaamaal.com/store_desc_images/1516166339.jpg" alt="" width="100%"></img>

            </div>
    
  )
}

export default Navbar