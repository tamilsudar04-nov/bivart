import React from "react";
import "../Styles/Women.css";


import sale from "/src/assets/sale.jpg";
   
 //  sarees
import s1 from '/src/assets/sarees/s1.jpg';
import s2 from '/src/assets/sarees/s2.jpg';
import s3 from '/src/assets/sarees/s3.jpg';
import s4 from '/src/assets/sarees/s4.jpg';
import s5 from '/src/assets/sarees/s5.jpg';
import s6 from '/src/assets/sarees/s6.jpg';
import s7 from '/src/assets/sarees/s7.jpg';
import s8 from '/src/assets/sarees/s8.jpg';
import s9 from '/src/assets/sarees/s9.jpg';
import s10 from '/src/assets/sarees/s10.jpg';
import s11 from '/src/assets/sarees/s11.jpg';
import s12 from '/src/assets/sarees/s12.jpg';

            // kurtis
import k1 from '/src/assets/kurtis/k1.jpg';
import k2 from '/src/assets/kurtis/k2.jpg';
import k7 from '/src/assets/kurtis/k7.jpg';
import k4 from '/src/assets/kurtis/k4.jpg';
import k5 from '/src/assets/kurtis/k5.jpg';
import k13 from '/src/assets/kurtis/s13.jpg';
import k3 from '/src/assets/kurtis/k3.jpg';
import k8 from '/src/assets/kurtis/k8.jpg';
import k9 from '/src/assets/kurtis/k9.jpg';
import k12 from'/src/assets/kurtis/k12.jpg';
import k11 from'/src/assets/kurtis/k11.jpg';
import k6 from '/src/assets/kurtis/k6.jpg';
          
              // bottom

import b1 from '/src/assets/bottom/b1.jpg';
import b2 from '/src/assets/bottom/b2.jpg';             
import b3 from '/src/assets/bottom/b3.jpg';
import b4 from '/src/assets/bottom/b4.jpg';
import b5 from '/src/assets/bottom/b5.jpg';
import b6 from '/src/assets/bottom/b6.jpg';
import b7 from '/src/assets/bottom/b7.jpg';
import b8 from '/src/assets/bottom/b8.jpg';
import b9 from '/src/assets/bottom/b9.jpg';
import b10 from '/src/assets/bottom/b10.jpg';
import b11 from '/src/assets/bottom/b11.jpg';
 import b12 from '/src/assets/bottom/b12.jpg';

              // dres
import d1 from '/src/assets/dress/d1.jpg';
import d2 from '/src/assets/dress/d2.jpg';
import d3 from '/src/assets/dress/d3.jpg';
import d4 from '/src/assets/dress/d4.jpg';
import d5 from '/src/assets/dress/d5.jpg';
import d13 from '/src/assets/dress/d13.jpg';
import d7 from '/src/assets/dress/d7.jpg';
import d8 from '/src/assets/dress/d8.jpg';
import d9 from '/src/assets/dress/d9.jpg';
import d10 from '/src/assets/dress/d10.jpg';
import d11 from '/src/assets/dress/d11.jpg';
import d12 from '/src/assets/dress/d12.jpg';

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistProvider";



    //  sarees

const sarees = [
  {
    id: 1,
    image:s1,
    brand: "Style",
    title: "Women black Georgette Saree with Blouse Piece",
    price: "₹1,395",
    oldPrice: "₹4,497",
    discount: "69%",
 
  },
  {
    id: 2,
    image:s2,
    brand: "Tradition",
    title: "women traditional maroon cotton saree with gold works",
    price: "₹2,034",
    oldPrice: "₹4,959",
    discount: "59%",
    
  },
  {
    id: 3,
    image:s3 ,
    brand: "Label",
    title: "Women  grant silk Saree with aari Blouse Piece",
    price: "₹1,239",
    oldPrice: "₹3,999",
    discount: "65%",
  
  },
  {
    id: 4,
    image:s4 ,
    brand: "Fashion",
    title: "women white pure cotton saree with blouse piece",
    price: "₹1500",
    oldPrice: "₹5,000",
    discount: "50%",
  
  },
  {
    id: 5,
    image:s5 ,
    brand: "Fashion",
    title: "women beautiful silk saree with blouse piece",
    price: "₹1000",
    oldPrice: "₹4000",
    discount: "25%",
  
  },
  {
    id: 6,
    image:s6 ,
    brand: "Label",
    title: "women cotton blend saree with blouse piece",
    price: "₹2,262",
    oldPrice: "₹5,799",
    discount: "61%",
  
  },
  {
    id: 7,
    image:s7 ,
    brand: "Tradition",
    title: "women purple pure cotton saree with blouse piece",
    price: "₹2,262",
    oldPrice: "₹5,799",
    discount: "50%",
  
  },
   {
    id: 8,
    image:s8,
    brand: "Label",
    title: "women multi colour pure cotton saree with blouse piece",
    price: "₹1,000",
    oldPrice: "₹2,999",
    discount: "51%",
  
  },
   {
    id: 9,
    image:s9 ,
    brand: "Tradition",
    title: "women beautiful silk saree with blouse piece",
    price: "₹2,262",
    oldPrice: "₹5,799",
    discount: "37%",
  
  },
   {
    id: 10,
    image:s10 ,
    brand: "Label",
    title: "women kerala saree made with pure cotton",
    price: "₹999",
    oldPrice: "₹2,999",
    discount: "44%",
  
  },
   {
    id: 11,
    image:s11,
    brand: "Fashion",
    title: "women beautiful silk saree with blouse piece",
    price: "₹2,262",
    oldPrice: "₹8,799",
    discount: "61%",
  
  },
   {
    id: 12,
    image:s12,
    brand: "Fashion",
    title: "Women blue Georgette Saree with Blouse Piece",
    price: "₹1999",
    oldPrice: "₹5,799",
    discount: "75%",
  
  },
  
];

                // kurtis

 const kurtis =[
  {
    id: 1,
    image:k1,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 2,
    image:k2,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 3,
    image:k7,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 4,
    image:k4,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 5,
    image:k5,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 6,
    image:k13,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 7,
    image:k3,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 8,
    image:k8,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 9,
    image:k9,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 10,
    image:k12,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 11,
    image:k11,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 12,
    image:k6,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
 ];

              //  Bottom wears

   const bottom =[
 {
    id: 1,
    image:b1,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 2,
    image:b2,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 3,
    image:b3,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 4,
    image:b4,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 5,
    image:b5,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 6,
    image:b6,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 7,
    image:b7,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 8,
    image:b8,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 9,
    image:b9,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 10,
    image:b10,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
{
    id: 11,
    image:b11,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 12,
    image: b12,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  }

   ] ; 
   
   
  //  DRESS

     const dress =[
      {
    id: 1,
    image:d1,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 2,
    image:d2,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 3,
    image:d3,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 4,
    image:d4,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 5,
    image:d5,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 6,
    image:d13,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 7,
    image:d7,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 8,
    image:d8,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 9,
    image:d9,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 10,
    image:d10,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 11,
    image:d11,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 12,
    image:d12,
    brand: "Fashion",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  
     ];






export default function Products() {
  const { addToCart } = useCart(); 
  
  const { addToWishlist } = useWishlist();
  return (

<div>
<img className="sale" src={sale} alt="" />
 <p className='bivart'>Bivart</p>
    <p className='fashion'>Fashion</p>
         {/* sarees */}

    <h1 className="sarees">SAREES</h1>
    <div className="container">
      {sarees.map((item) => (
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
           <button
  onClick={() => {
    addToCart(item);
    alert(`${item.title} added to cart!`);
  }}
>
  Add to Cart
</button>

 <button className="wishlist-btn" onClick={() => addToWishlist(item)}>
            💖 Add to Wishlist
          </button>

        </div>
      ))}
    </div>

            {/* kurtis */}
 <h1 className="kurtis">KURTIS</h1>
    <div className="container">
      {kurtis.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} className="img"/>
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
   

            {/* bottom wears */}

 <h1 className="bottom">JEANS</h1>
    <div className="container">
      {bottom.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} className="img"/>
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
                {/* DRESS */}

<h1 className="dress">DRESS</h1>
    <div className="container">
      {dress.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} className="img"/>
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

    </div>
  );
}
