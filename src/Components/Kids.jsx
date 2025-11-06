import React from "react";
import "../Styles/Kids.css";


import kids1 from "../assets/carousel/kids1.jpg" 
import heart from "../assets/heart.png";
import sale from "../assets/sale.jpg";
import kids3 from "../assets/carousel/kids3.jpg";
import kids2 from "../assets/carousel/kids2.jpg";
    // boys
import y1 from "../assets/boys/y1.jpg";
import y2 from "../assets/boys/y2.jpg";
import y3 from "../assets/boys/y3.jpg";
import y4 from "../assets/boys/y4.jpg";
import y5 from "../assets/boys/y5.jpg";
import y6 from "../assets/boys/y6.jpg";
import y7 from "../assets/boys/y7.jpg";
import y8 from "../assets/boys/y8.jpg";
import y9 from "../assets/boys/y9.jpg";
import y10 from "../assets/boys/y10.jpg";
import y11 from "../assets/boys/y11.jpg";
import y12 from "../assets/boys/y12.jpg";

    // girls
import q1 from "../assets/girls/q1.jpg";
import q2 from "../assets/girls/q2.jpg";
import q3 from "../assets/girls/q3.jpg";
import q4 from "../assets/girls/q4.jpg";
import q5 from "../assets/girls/q5.jpg";
import q6 from "../assets/girls/q6.jpg";
import q7 from "../assets/girls/q7.jpg";
import q8 from "../assets/girls/q8.jpg";
import q9 from "../assets/girls/q9.jpg";
import q10 from "../assets/girls/q10.jpg";
import q11 from "../assets/girls/q11.jpg";
import q12 from "../assets/girls/q12.jpg";

import { useWishlist } from "../context/WishlistProvider";
import { useCart } from "../context/CartContext";
     
        // girls

const girls =[
  {
    id: 1,
    image:q1,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
 
  },
  {
    id: 2,
    image:q2,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹500",
    oldPrice: "₹1000",
    discount: "50%",
 
  },
  {
    id: 3,
    image:q3,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹600",
    oldPrice: "₹1200",
    discount: "50%",
  },
  {
    id: 4,
    image:q4,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
 
  },
  {
    id: 5,
    image:q5,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹400",
    oldPrice: "₹900",
    discount: "30%",
  },
  {
    id: 6,
    image:q6,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹500",
    oldPrice: "1200₹",
    discount: "55%",
  },
  {
    id: 7,
    image:q7,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
 
 
  },
   {
    id: 8,
    image:q8,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
  },
   {
    id: 9,
    image:q9,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹1000",
    oldPrice: "₹2000",
    discount: "50%",
  },
   {
    id: 10,
    image:q10,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹799",
    oldPrice: "₹1999",
    discount: "20%",
 
  },
   {
    id: 11,
    image:q11,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹999",
    oldPrice: "₹1999",
    discount: "50%",
 
  },
   {
    id: 12,
    image:q12,
    brand: "Style",
    title: "cute little preety girls  dress",
    price: "₹900",
    oldPrice: "₹1000",
    discount: "10%",
  },
 ];

    //  boys
      
  const boys =[
  {
    id: 1,
    image:y1,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
 
  },
  {
    id: 2,
    image:y2,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹500",
    oldPrice: "₹1000",
    discount: "50%",
 
  },
  {
    id: 3,
    image:y3,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹600",
    oldPrice: "₹1200",
    discount: "50%",
 
  },
  {
    id: 4,
    image:y4,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
 
  },
  {
    id: 5,
    image:y5,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹400",
    oldPrice: "₹900",
    discount: "30%",
 
  },
  {
    id: 6,
    image:y6,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹500",
    oldPrice: "1200₹",
    discount: "55%",
 
  },
  {
    id: 7,
    image:y7,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
 
  },
   {
    id: 8,
    image:y8,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
 
  },
   {
    id: 9,
    image:y9,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹1000",
    oldPrice: "₹2000",
    discount: "50%",
 
  },
   {
    id: 10,
    image:y10,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹799",
    oldPrice: "₹1999",
    discount: "20%",
 
  },
   {
    id: 11,
    image:y11,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹999",
    oldPrice: "₹1999",
    discount: "50%",
 
  },
   {
    id: 12,
    image:y12,
    brand: "Style",
    title: "preety little baby boys dress",
    price: "₹900",
    oldPrice: "₹1000",
    discount: "10%",
 
  },
 ];


export default function Kids() {
   const { addToCart } = useCart(); 
    
    const { addToWishlist } = useWishlist();
  
  return (
    <div>
      

      <div className="carousel">
  <div
    id="demo"
    className="carousel slide"
    data-bs-ride="carousel"      
    data-bs-interval="2000"       
    style={{ width: "100%", height: "20%" }}
  >
    {/* Indicators/dots */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="0"
        className="active"
      ></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

    {/* The slideshow/carousel */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={kids2}
          alt="bd1"
          className="bdpic1"
          style={{ width: "100%", height: "20%" }}
        />
      </div>

      <div className="carousel-item">
        <img
          src={kids3}
          alt="bd2"
          className="bdpic2"
          style={{ width: "100%", height: "20%" }}
        />
      </div>

      <div className="carousel-item">
        <img
          src={kids1}
          alt="bd3"
          className="bdpic3"
          style={{ width: "100%", height: "20%" }}
        />
      </div>
    </div>

    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
</div>


            {/* boys */}
<h1 className="boys">BOYS</h1>
  
    <div className="container">
      {boys.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} className="img"/>
         <h4 className="brand">{item.brand}</h4>
          <p className="title">{item.title}</p>
          <div className="price">
            <span className="price1">{item.price}</span>
            <span className="old-price">{item.oldPrice}</span>
            <span className="discount">{item.discount}</span>
            </div>


             {/* 🛒 Add this button */}
         <button className="atc" onClick={() => { addToCart(item);
    alert(`${item.title} added to cart!`);}}>🛒 Add to Cart</button>


 <button className="wis" onClick={() => addToWishlist(item)}>  
   <img src={heart} alt="" width="30vw" height="30vh"/>
          </button>
          </div>

       
      ))}
    </div>
         

           {/* girls */}
<h1 className="girls">GIRLS</h1>
  
    <div className="container">
      {girls.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} className="img"/>
         <h4 className="brand">{item.brand}</h4>
          <p className="title">{item.title}</p>
          <div className="price">
            <span className="price1">{item.price}</span>
            <span className="old-price">{item.oldPrice}</span>
            <span className="discount">{item.discount}</span>
            </div>


             {/* 🛒 Add this button */}
         <button className="atc" onClick={() => { addToCart(item);
    alert(`${item.title} added to cart!`);}}>🛒 Add to Cart</button>


 <button className="wis" onClick={() => addToWishlist(item)}>  
   <img src={heart} alt="" width="30vw" height="30vh"/>
          </button>
          </div>

       
    ))}
  </div>
      
        


    </div>



  );


  
}
