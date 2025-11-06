import React, { useState, useEffect } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
 import log from "../assets/log.jpg";
import log2 from "../assets/log2.jpg";
export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    gender: "",
    city: "",
    stylePreference: "",
    email: "",
    password: "",
  });

  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Check if user is already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (user) {
      setLoggedUser(user);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { username, phone, gender, city, stylePreference, email, password } = formData;

    if (!username || !phone || !gender || !city || !stylePreference || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(
      (u) => u.email === email || u.username === username
    );

    if (existingUser) {
      if (existingUser.password === password) {
        localStorage.setItem("loggedUser", JSON.stringify(existingUser));
        alert(`Welcome back, ${existingUser.username}!`);
      } else {
        existingUser.password = password;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedUser", JSON.stringify(existingUser));
        alert(`Welcome back, ${existingUser.username}! (Password updated)`);
      }
    } else {
      const newUser = { username, phone, gender, city, stylePreference, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedUser", JSON.stringify(newUser));
      alert(`Welcome, ${username}! Your account has been created.`);
    }

    navigate("/");
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setLoggedUser(null);
    alert("You have been logged out.");
    navigate("/Login");
    window.location.reload();
  };

  return (
    <div>
      

    
      {loggedUser ? (
        <div className="BOX">
           <img src={log2} alt=""  className="log2"/>
          <h2 className="welcome">Welcome, {loggedUser.username}!</h2>
          <p className="subtitle">You are already logged in.</p>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>'
          </div>
     
      ) : (
       
        <form onSubmit={handleLogin} className="form">
          <h2 >Welcome to Bivart Fashion</h2>
          <p >Login or create your account</p>
          
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          /><br /><br />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          /><br /><br />

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select><br /><br />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          /><br /><br />

          <input
            type="text"
            name="stylePreference"
            placeholder="Style Preference (e.g., Casual, Traditional)"
            value={formData.stylePreference}
            onChange={handleChange}
          /><br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          /><br /><br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          /><br /><br />
          

          <button type="submit" className="login">
            Continue
          </button>
           <img src={log} alt=""  className="log"/>
        </form>
      )}
    </div>
  );
}
