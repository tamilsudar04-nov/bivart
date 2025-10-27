import React from 'react'
import "../Styles/Men.css"
import sale from "/src/assets/sale.jpg"
import heart from "/src/assets/heart.png"

            //  casuals
import ts1 from "/src/assets/tshirts/ts1.jpg";
import ts2 from "/src/assets/tshirts/ts2.jpg";
import ts3 from "/src/assets/tshirts/ts3.jpg";
import ts4 from "/src/assets/tshirts/ts4.jpg";
import ts5 from "/src/assets/tshirts/ts5.jpg";
import ts6 from "/src/assets/tshirts/ts6.jpg";
import ts7 from "/src/assets/tshirts/ts7.jpg";
import ts8 from "/src/assets/tshirts/ts8.jpg";
import ts9 from "/src/assets/tshirts/ts9.jpg";
import ts10 from "/src/assets/tshirts/ts10.jpg";
import ts11 from "/src/assets/tshirts/ts11.jpg";
import ts12 from "/src/assets/tshirts/ts12.jpg";

       //casual

import c1 from "/src/assets/casuals/c1.jpg";
import c2 from "/src/assets/casuals/c2.jpg";
import c3 from "/src/assets/casuals/c3.jpg";
import c4 from "/src/assets/casuals/c4.jpg";
import c5 from "/src/assets/casuals/c5.jpg";
import c6 from "/src/assets/casuals/c6.jpg";
import c7 from "/src/assets/casuals/c7.jpg";
import c8 from "/src/assets/casuals/c8.jpg";
import c9 from "/src/assets/casuals/c9.jpg";
import c10 from "/src/assets/casuals/c10.jpg";
import c11 from "/src/assets/casuals/c11.jpg";
import c12 from "/src/assets/casuals/c12.jpg";






      // formals
import f1 from "/src/assets/formals/f1.jpg";
import f2 from "/src/assets/formals/f2.jpg";
import f3 from "/src/assets/formals/f3.jpg";
import f4 from "/src/assets/formals/f4.jpg";
import f5 from "/src/assets/formals/f5.jpg";
import f6 from "/src/assets/formals/f6.jpg";
import f7 from "/src/assets/formals/f7.jpg";
import f8 from "/src/assets/formals/f8.jpg";
import f9 from "/src/assets/formals/f9.jpg";
import f10 from "/src/assets/formals/f10.jpg";
import f11 from "/src/assets/formals/f11.jpg";
import f12 from "/src/assets/formals/f12.jpg";

import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistProvider';
import { Form } from 'react-router-dom';

const formals=[
  {
    id: 1,
    image:f1,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 2,
    image:f2,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 3,
    image:f3,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 4,
    image:f4,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 5,
    image:f5,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 6,
    image:f6,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 7,
    image:f7,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 8,
    image:f8,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 9,
    image:f9,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 10,
    image:f10,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 11,
    image:f11,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 12,
    image:f12,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
 ];


    // casuals

const casuals=[
  {
    id: 1,
    image:c1,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 2,
    image:c2,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 3,
    image:c3,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 4,
    image:c4,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 5,
    image:c5,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 6,
    image:c6,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 7,
    image:c7,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 8,
    image:c8,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 9,
    image:c9,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 10,
    image:c10,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 11,
    image:c11,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 12,
    image:c12,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
 ];

              // formals


const tshirts =[
  {
    id: 1,
    image:ts1,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 2,
    image:ts2,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 3,
    image:ts3,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 4,
    image:ts4,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 5,
    image:ts5,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 6,
    image:ts6,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
  {
    id: 7,
    image:ts7,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 8,
    image:ts8,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 9,
    image:ts9,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 10,
    image:ts10,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 11,
    image:ts11,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
   {
    id: 12,
    image:ts12,
    brand: "Style",
    title: "",
    price: "₹",
    oldPrice: "₹",
    discount: "%",
 
  },
 ];

 
   
export default function Men() {
   const { addToCart } = useCart(); 
    
    const { addToWishlist } = useWishlist();
  
  return (
    <div>
      <img className="sale" src={sale} alt="" />
       <p className='bivart'>Bivart</p>
          <p className='fashion'>Fashion</p>
      <h1 className="tshirts">T-SHIRT</h1>
         <div className="container">
           {tshirts.map((item) => (
             <div className="card" key={item.id}>
               <img src={item.image} alt={item.title} className="img"/>
              <h4 className="brand">{item.brand}</h4>
               <p className="title">{item.title}</p>
               <div className="price">
                 <span className="price1">{item.price}</span>
                 <span className="old-price">{item.oldPrice}</span>
                 <span className="discount">{item.discount}</span>
                 </div>
     
                  <button  className="atc" onClick={() => { addToCart(item);
         alert(`${item.title} added to cart!`);}}>Add to Cart</button>
      
      <button className="wis" onClick={() => addToWishlist(item)}>  
        <img src={heart} alt="" width="30vw" height="30vh"/>
               </button>
             </div>
           ))}
         </div>


        {/* formals */}
 <h1 className="formals">FORMALS</h1>
         <div className="container">
           {formals.map((item) => (
             <div className="card" key={item.id}>
               <img src={item.image} alt={item.title} className="img"/>
              <h4 className="brand">{item.brand}</h4>
               <p className="title">{item.title}</p>
               <div className="price">
                 <span className="price1">{item.price}</span>
                 <span className="old-price">{item.oldPrice}</span>
                 <span className="discount">{item.discount}</span>
                 </div>
     
                  <button  className="atc" onClick={() => { addToCart(item);
         alert(`${item.title} added to cart!`);}}>Add to Cart</button>
      
      <button className="wis" onClick={() => addToWishlist(item)}>  
        <img src={heart} alt="" width="30vw" height="30vh"/>
               </button>
             </div>
           ))}
         </div>


         {/* casuals */}

  <h1 className="causals">CASUALS</h1>
         <div className="container">
           {casuals.map((item) => (
             <div className="card" key={item.id}>
               <img src={item.image} alt={item.title} className="img"/>
              <h4 className="brand">{item.brand}</h4>
               <p className="title">{item.title}</p>
               <div className="price">
                 <span className="price1">{item.price}</span>
                 <span className="old-price">{item.oldPrice}</span>
                 <span className="discount">{item.discount}</span>
                 </div>
     
                  <button  className="atc" onClick={() => { addToCart(item);
         alert(`${item.title} added to cart!`);}}>Add to Cart</button>
      
      <button className="wis" onClick={() => addToWishlist(item)}>  
        <img src={heart} alt="" width="30vw" height="30vh"/>
               </button>
             </div>
           ))}
         </div>



    </div>

  
  )
}

