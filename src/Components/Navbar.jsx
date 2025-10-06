import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className='nav' >
          <Link to="/" className='nav1'><img src="src/assets/b.png" alt="b" height={'55vh'} width={'50vw'}/> <br /> Bivart Fashion</Link>
          <Link to="Women"className='nav2'><img src="src/assets/frock.png" alt="W"  height={'50vh'} width={'50vw'}/><br /> Women</Link>
          <Link to="Men" className='nav3'><img className="men"src="src/assets/polo-shirt.png" alt="M"  height={'50vh'} width={'50vw'} /><br />Men</Link>
          <Link to="Kids" className='nav4'><img className="men" src="src/assets/baby-cloth.png" alt="K"  height={'50vh'} width={'50vw'}/><br />Kids</Link>
           <Link to="Wishlist" className='nav5'><img className="W" src="src/assets/shopping-cart (1).png" alt=""  height={'50vh'} width={'50vw'}/><br />Wishlist</Link>
          <Link to="AddCart"className='nav6'><img className="AC" src="src/assets/add-to-cart.png" alt="K"  height={'50vh'} width={'50vw'}/><br />AddCart</Link>
          <Link to="Login" className='nav7'><img className="" src="src/assets/user (1).png" alt=""  height={'50vh'} width={'50  vw'}/><br />Login</Link>
          <Link to="Contact" className='nav8'><img className=""  src="src/assets/contact-us.png" alt="K"  height={'50vh'} width={'50vw'}/><br />Contact</Link> 
       </nav>
  


    </div>
  )
}
