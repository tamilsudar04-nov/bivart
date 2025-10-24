import React from "react";
import { useCart } from "../context/CartContext";
import "../Styles/Cart.css"; 

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <a href="/" className="shop-now-btn">
            Shop Now
          </a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-image" />

                <div className="cart-details">
                  <h4 className="cart-brand">{item.brand}</h4>
                  <p className="cart-title">{item.title}</p>
                  <p className="cart-price">Price: {item.price}</p>

                  <div className="cart-actions">
                    <label>Qty:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="cart-quantity"
                    />
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="cart-total-item">
                  ₹
                  {(
                    parseFloat(item.price.replace(/[₹,]/g, "")) * item.quantity
                  ).toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total Amount: ₹{total.toLocaleString("en-IN")}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
