import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

import Wishlist from '/src/assets/Wishlist.jpg'
import addtocart from '/src/assets/addtocart.jpg'
import user from '/src/assets/user.jpg'






export default function Navbar() {
  return (
    <div>
      <nav className='nav' >
          <Link to="/" className='nav1'> Bivart Fashion</Link>
          <Link to="Women"className='nav2'> Women</Link>
          <Link to="Men" className='nav3'>Men</Link>
          <Link to="Kids" className='nav4'>Kids</Link>
           <Link to="Contact" className='nav8'>Contact</Link> 
           <Link to="Wishlist" className='nav5'><img src={Wishlist} width='35vw' height='35vh'/> Wishlist</Link>
          <Link to="AddCart"className='nav6'><img src={addtocart} width='35vw' height='35vh'/>AddCart</Link>
          <Link to="Login" className='nav7'><img src={user} width='35vw' height='35vh'/>Login</Link>
         
       </nav>
  


    </div>
  )
}
