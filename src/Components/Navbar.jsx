
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../assets/user.jpg";
import addtocart from "../assets/addtocart.jpg";
import heart from "../assets/heart.png";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (savedUser) setLoggedUser(savedUser);
  }, []);

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div className="navbar-container">
      {/* LOGO + HAMBURGER MOBILE */}
      <div className="mobile-header">
        <Link to="/" className="bf">Bivart Fashion</Link>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="navbar">
        <ul className="list">
          <li className="nav1"><Link to="/">Bivart Fashion</Link></li>
          <li className="nav2"><Link to="/Women">Women</Link></li>
          <li className="nav3"><Link to="/Men">Men</Link></li>
          <li className="nav4"><Link to="/Kids">Kids</Link></li>
          <li className="nav5"><Link to="/Contact">Contact</Link></li>
          <li className="nav6"><Link to="/Wishlist"><img src={heart} width="25" /> Wishlist</Link></li>
          <li className="nav7"><Link to="/Cart"><img src={addtocart} width="30" /> Cart</Link></li>

          <div className="Login" onClick={handleLoginClick}>
            <img src={user} width="35" />
            <span>{loggedUser ? loggedUser.username : "Login"}</span>
          </div>
        </ul>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <ul className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <li><Link to="/Women">Women</Link></li>
        <li><Link to="/Men">Men</Link></li>
        <li><Link to="/Kids">Kids</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Wishlist"><img src={heart} width="20" /> Wishlist</Link></li>
        <li><Link to="/Cart"><img src={addtocart} width="20" /> Cart</Link></li>
        <li onClick={handleLoginClick}>
          <img src={user} width="25" /> {loggedUser ? loggedUser.username : "Login"}
        </li>
      </ul>
    </div>
  );
}
// 