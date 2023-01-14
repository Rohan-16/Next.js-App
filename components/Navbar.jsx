import React,{useState} from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import {Cart} from "./";
import {useStateContext} from "../context/StateContext";
import { AutoComplete } from 'antd';




const Navbar = (prod) => {
  
  const {showCart,setShowCart,totalQuantities} = useStateContext();
  

  return (
    <div className='navbar-container'>

      <p className='logo'>
        
        <Link href="/">CarAccess</Link>
      </p>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar
