
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contact.css";
import Cont from "../assets/Cont.jpg";

function Contact() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Please enter your username to continue.");
      return;
    }
    setIsLoggedIn(true);
    setStatus("");
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send Email
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      username: username,
    };

    emailjs
      .send(
        "service_mdtstpa", // Your EmailJS service ID
        "template_s8dys19", // Your template ID
        params,
        "j44bqjjR-2f24DLsc" // Your public key
      )
      .then(
        () => {
          setStatus("✅ Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          // Remove success message after 3 seconds
          setTimeout(() => {
            setStatus("");
            setShowThankYou(true);
          }, 3000);
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div>
      <img className="cont" src={Cont} alt="" />
      <div className="contact-page">
        {!isLoggedIn ? (
          <div className="login-box">
            <h2>Login to Continue</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <div className="contact-box">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you!</p>

            {!showThankYou ? (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            ) : (
              <div className="thank-you">
                <h3>🎉 Thank You!</h3>
                <p>Your message has been received. We’ll get back to you soon.</p>
              </div>
            )}

            {status && <p className="status-msg">{status}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
