import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user from "../assets/user.jpg"
import addtocart from '../assets/addtocart.jpg';
import wishlist from '../assets/Wishlist.jpg';
import '../Styles/Navbar.css';

export default function Navbar() {
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (savedUser) setLoggedUser(savedUser);
  }, []);

  const handleLoginClick = () => {
    navigate("/Login"); 
  };
 
  return (
    <div>
      <nav className='navbar'>
        <ul className='list'>
          <li className='nav1'> <Link to='/'>Bivart Fashion</Link></li>
          <li className='nav2'><Link to='/Women'>Women</Link></li>
          <li className='nav3'><Link to='/Men'>Men</Link></li>
           <li className='nav4'><Link to='/Kids'>Kids</Link></li>
            <li className='nav5'><Link to='/Contact'>Contact</Link></li>
             <li className='nav6'><Link to='/Wishlist'><img src={wishlist} width="35vw" height="35vh" alt="" />Wishlist</Link></li>
              <li className='nav7'><Link to='/Cart'><img src={addtocart} width="35vw" height="35vh"alt="" />Add to Cart</Link></li>
               <div className="Login" onClick={handleLoginClick}>
          <img src={user} width="35vw" height="35vh" alt="User" />
          <span >{loggedUser ? loggedUser.username : "Login"}</span>
        </div>
        
        </ul>
      </nav>
    </div>
  )
}
