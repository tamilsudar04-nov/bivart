import React from "react";
import { useWishlist } from "../context/WishlistProvider";
import "../Styles/Wishlist.css";0
import sale from "/src/assets/sale.jpg";
export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
    <img className="sale" src={sale} alt="" />
     <p className='bivart'>Bivart</p>
        <p className='fashion'>Fashion</p>
    <div className="wishlist-container">
      <h1 className="wishlist-title"> Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <h1>Your wishlist is empty.</h1>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.title} className="wishlist-image"/>
              <div className="wishlist-details">
                <h4>{item.brand}</h4>
                <p>{item.title}</p>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
