import React, { useState, useEffect } from "react";
import "../Styles/Saree.css";

export default function SareesSection() {
  const [selectedSaree, setSelectedSaree] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load previous cart from localStorage when the page loads
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  // Save cart & wishlist when updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const sarees = [
    {
      id: 1,
      image: "https://i.ibb.co/rfTQfZC/saree1.jpg",
      brand: "Biba",
      title: "Silk Saree with Embroidery",
      price: "₹2,499",
      oldPrice: "₹3,499",
      discount: "30% OFF",
    },
    {
      id: 2,
      image: "https://i.ibb.co/jzkJQmz/saree2.jpg",
      brand: "FabIndia",
      title: "Cotton Handloom Saree",
      price: "₹1,999",
      oldPrice: "₹2,999",
      discount: "33% OFF",
    },
    {
      id: 3,
      image: "https://i.ibb.co/fpmpYNq/saree3.jpg",
      brand: "W for Women",
      title: "Designer Chiffon Saree",
      price: "₹3,299",
      oldPrice: "₹4,999",
      discount: "35% OFF",
    },
  ];

  const handleCardClick = (item) => setSelectedSaree(item);
  const closePopup = () => setSelectedSaree(null);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    alert(`${item.title} added to Cart 🛒`);
  };

  const handleAddToWishlist = (item) => {
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    alert(`${item.title} added to Wishlist 💖`);
  };

  return (
    <div>
      <h1 className="sarees">SAREES</h1>

      <div className="cart-summary">
        🛒 Cart Items: {cart.length} | 💖 Wishlist: {wishlist.length}
      </div>

      <div className="container">
        {sarees.map((item) => (
          <div
            className="card"
            key={item.id}
            onClick={() => handleCardClick(item)}
          >
            <img src={item.image} alt={item.title} className="img" />
            <h4 className="brand">{item.brand}</h4>
            <p className="title">{item.title}</p>
            <div className="price">
              <span className="price1">{item.price}</span>
              <span className="old-price">{item.oldPrice}</span>
              <span className="discount">{item.discount}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedSaree && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
            <img
              src={selectedSaree.image}
              alt={selectedSaree.title}
              className="popup-img"
            />
            <h2>{selectedSaree.brand}</h2>
            <p>{selectedSaree.title}</p>
            <div className="popup-price">
              <span className="price1">{selectedSaree.price}</span>
              <span className="old-price">{selectedSaree.oldPrice}</span>
              <span className="discount">{selectedSaree.discount}</span>
            </div>
            <div className="popup-buttons">
              <button
                className="btn cart-btn"
                onClick={() => handleAddToCart(selectedSaree)}
              >
                🛒 Add to Cart
              </button>
              <button
                className="btn wishlist-btn"
                onClick={() => handleAddToWishlist(selectedSaree)}
              >
                💖 Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
