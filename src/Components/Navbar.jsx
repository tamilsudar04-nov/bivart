import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user from '../assets/Tops/user.jpg';
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
      <nav className='nav'>
        <ul>
          <li className='nav1'> <Link to='/'>Bivart Fashion</Link></li>
          <li className='nav2'><Link to='/Women'>Women</Link></li>
          <li className='nav3'><Link to='/Men'>Men</Link></li>
           <li className='nav4'><Link to='/Kids'>Kids</Link></li>
            <li className='nav5'><Link to='/Contact'>Contact</Link></li>
             <li className='nav6'><Link to='/Wishlist'>Wishlist</Link></li>
              <li className='nav7'><Link to='/AddCart'>Add to Cart</Link></li>
               <div className="nav8" onClick={handleLoginClick}>
          <img src={user} width="35vw" height="35vh" alt="User" />
          <span>{loggedUser ? loggedUser.username : "Login"}</span>
        </div>
        </ul>
      </nav>
    </div>
  )
}
