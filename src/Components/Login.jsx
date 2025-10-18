import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
    stylePreference: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { username, phone, email, password, gender, stylePreference } = formData;

    if (!username || !phone || !email || !password || !gender || !stylePreference) {
      alert("Please fill in all fields!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      if (existingUser.password === password) {
        localStorage.setItem("loggedUser", JSON.stringify(existingUser));
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Incorrect password!");
      }
    } else {
      const newUser = { username, phone, email, password, gender, stylePreference };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedUser", JSON.stringify(newUser));
      alert("New account created successfully!");
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Welcome to Bivart Fashion 👗</h2>
        <p className="subtitle">Login or Create your Fashion Profile</p>

        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="stylePreference"
          value={formData.stylePreference}
          onChange={handleChange}
        >
          <option value="">Select Style Preference</option>
          <option value="Traditional">Traditional</option>
          <option value="Western">Western</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
        </select>

        <button type="submit" className="login-btn">Login / Register</button>
      </form>
    </div>
  );
}
