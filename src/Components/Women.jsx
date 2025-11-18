import React from "react";
import "../Styles/Women.css";

import women1 from "../assets/carousel/women1.jpg";
import women2 from "../assets/carousel/women2.jpg";
import women3 from "../assets/carousel/women3.jpg";

import heart from "/src/assets/heart.png";
   
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
    title: "Women black Georgette Saree ",
    price: "₹1,395",
    oldPrice: "₹4,497",
    discount: "69%",
 
  },
  {
    id: 2,
    image:s2,
    brand: "Tradition",
    title: " maroon cotton saree with gold works",
    price: "₹2,034",
    oldPrice: "₹4,959",
    discount: "59%",
    
  },
  {
    id: 3,
    image:s3 ,
    brand: "Label",
    title: "Women  grant silk Saree ",
    price: "₹1,239",
    oldPrice: "₹3,999",
    discount: "65%",
  
  },
  {
    id: 4,
    image:s4 ,
    brand: "Fashion",
    title: "women white pure cotton saree ",
    price: "₹1500",
    oldPrice: "₹5,000",
    discount: "50%",
  
  },
  {
    id: 5,
    image:s5 ,
    brand: "Fashion",
    title: "women beautiful silk saree ",
    price: "₹1000",
    oldPrice: "₹4000",
    discount: "25%",
  
  },
  {
    id: 6,
    image:s6 ,
    brand: "Label",
    title: "women cotton blend saree ",
    price: "₹2,262",
    oldPrice: "₹5,799",
    discount: "61%",
  
  },
  {
    id: 7,
    image:s7 ,
    brand: "Tradition",
    title: "women purple pure cotton saree ",
    price: "₹2,262",
    oldPrice: "₹5,799",
    discount: "50%",
  
  },
   {
    id: 8,
    image:s8,
    brand: "Label",
    title: "women multi colour pure cotton saree ",
    price: "₹1,000",
    oldPrice: "₹2,999",
    discount: "51%",
  
  },
   {
    id: 9,
    image:s9 ,
    brand: "Tradition",
    title: "women beautiful silk saree ",
    price: "₹2,262",
    oldPrice: "₹5,799",
    discount: "37%",
  
  },
   {
    id: 10,
    image:s10 ,
    brand: "Label",
    title: "women kerala saree made ",
    price: "₹999",
    oldPrice: "₹2,999",
    discount: "44%",
  
  },
   {
    id: 11,
    image:s11,
    brand: "Fashion",
    title: "women beautiful silk saree ",
    price: "₹2,262",
    oldPrice: "₹8,799",
    discount: "61%",
  
  },
   {
    id: 12,
    image:s12,
    brand: "Fashion",
    title: "Women blue Georgette Saree ",
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
    title: "trendy stylish elegent womens kurtis",
    price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
  },
  {
    id: 2,
    image:k2,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
     price: "₹500",
    oldPrice: "₹1000",
    discount: "50%",
 
  },
  {
    id: 3,
    image:k7,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
    price: "₹600",
    oldPrice: "₹1200",
    discount: "50%",
 
  },
  {
    id: 4,
    image:k4,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
   price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
 
  },
  {
    id: 5,
    image:k5,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
    price: "₹400",
    oldPrice: "₹900",
    discount: "30%",
 
  },
  {
    id: 6,
    image:k13,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
    price: "₹500",
    oldPrice: "1200₹",
    discount: "55%",
 
  },
  {
    id: 7,
    image:k3,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
    price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
 
  },
   {
    id: 8,
    image:k8,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
    price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
 
  },
   {
    id: 9,
    image:k9,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
    price: "₹1000",
    oldPrice: "₹2000",
    discount: "50%",
 
  },
   {
    id: 10,
    image:k12,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
    price: "₹799",
    oldPrice: "₹1999",
    discount: "20%",
 
  },
   {
    id: 11,
    image:k11,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
     price: "₹999",
    oldPrice: "₹1999",
    discount: "50%",
 
 
  },
   {
    id: 12,
    image:k6,
    brand: "Style",
    title: "trendy stylish elegent womens kurtis",
     price: "₹900",
    oldPrice: "₹1000",
    discount: "10%",
 
  },
 ];

              //  Bottom wears

   const bottom =[
 {
    id: 1,
    image:b1,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
    price: "₹900",
    oldPrice: "₹1000",
    discount: "10%",
 
  },
   {
    id: 2,
    image:b2,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
    price: "₹999",
    oldPrice: "₹1999",
    discount: "50%",
 
  },
   {
    id: 3,
    image:b3,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
   price: "₹799",
    oldPrice: "₹1999",
    discount: "20%",
 
  },
   {
    id: 4,
    image:b4,
    brand: "Fashion",
    title: "Chic & Comfy Bottom  Wear",
    price: "₹1000",
    oldPrice: "₹2000",
    discount: "50%",
 
  },
   {
    id: 5,
    image:b5,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
    price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
 
  },
   {
    id: 6,
    image:b6,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
   price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
  },
  {
    id: 7,
    image:b7,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
     price: "₹500",
    oldPrice: "1200₹",
    discount: "55%",
 
  },
  {
    id: 8,
    image:b8,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
   price: "₹400",
    oldPrice: "₹900",
    discount: "30%",
  },
  {
    id: 9,
    image:b9,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
    price: "₹1000",
    oldPrice: "₹1500",
    discount: "40%",
 
  },
  {
    id: 10,
    image:b10,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
     price: "₹600",
    oldPrice: "₹1200",
    discount: "50%",
 
 
  },
{
    id: 11,
    image:b11,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
   price: "₹500",
    oldPrice: "₹1000",
    discount: "50%",
 
  },
  {
    id: 12,
    image: b12,
    brand: "Fashion",
    title: "Chic & Comfy Bottom Wear",
     price: "₹800",
    oldPrice: "₹1000",
    discount: "20%",
 
  }

   ] ; 
   
   
  //  DRESS
     const dress = [
  {
    id: 1,
    image: d1,
    brand: "Fashion",
    title: "High-Waist Straight Jeans",
    price: "₹1,299",
    oldPrice: "₹1,899",
    discount: "32%",
  },
  {
    id: 2,
    image: d2,
    brand: "Fashion",
    title: "Cotton Wide-Leg Trousers",
    price: "₹999",
    oldPrice: "₹1,599",
    discount: "38%",
  },
  {
    id: 3,
    image: d3,
    brand: "Fashion",
    title: "Slim Fit Black Jeggings",
    price: "₹849",
    oldPrice: "₹1,299",
    discount: "35%",
  },
  {
    id: 4,
    image: d4,
    brand: "Fashion",
    title: " women's Casual Denim Shorts",
    price: "₹749",
    oldPrice: "₹1,099",
    discount: "32%",
  },
  {
    id: 5,
    image: d5,
    brand: "Fashion",
    title: "silky Printed Flared Skirt",
    price: "₹899",
    oldPrice: "₹1,499",
    discount: "40%",
  },
  {
    id: 6,
    image: d13,
    brand: "Fashion",
    title: "women's Classic Blue Denim",
    price: "₹1,199",
    oldPrice: "₹1,799",
    discount: "33%",
  },
  {
    id: 7,
    image: d7,
    brand: "Fashion",
    title: "Cargo Joggers for Women",
    price: "₹1,099",
    oldPrice: "₹1,699",
    discount: "35%",
  },
  {
    id: 8,
    image: d8,
    brand: "Fashion",
    title: "Stretchable Skinny Jeans",
    price: "₹1,249",
    oldPrice: "₹1,999",
    discount: "38%",
  },
  {
    id: 9,
    image: d9,
    brand: "Fashion",
    title: "women's Casual Linen Pants",
    price: "₹1,149",
    oldPrice: "₹1,699",
    discount: "32%",
  },
  {
    id: 10,
    image: d10,
    brand: "Fashion",
    title: "women's Pleated Mini Skirt",
    price: "₹799",
    oldPrice: "₹1,199",
    discount: "33%",
  },
  {
    id: 11,
    image: d11,
    brand: "Fashion",
    title: "women'Relaxed Fit Culottes",
    price: "₹1,049",
    oldPrice: "₹1,599",
    discount: "34%",
  },
  {
    id: 12,
    image: d12,
    brand: "Fashion",
    title: "women's Stylish Bootcut Jeans",
    price: "₹1,399",
    oldPrice: "₹2,099",
    discount: "33%",
  },
];







export default function Products() {
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
    style={{ width: "100%", height: "90vh" }}
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
          src={women2}
          alt="bd1"
          className="bdpic1"
          style={{ width: "100%", height: "90vh" }}
        />
      </div>

      <div className="carousel-item">
        <img
          src={women1}
          alt="bd2"
          className="bdpic2"
          style={{ width: "100%", height: "90vh" }}
        />
      </div>

      <div className="carousel-item">
        <img
          src={women3}
          alt="bd3"
          className="bdpic3"
          style={{ width: "100%", height: "90vh" }}
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
         <button className="atc" onClick={() => { addToCart(item);
    alert(`${item.title} added to cart!`);}}>🛒 Add to Cart</button>


 <button id="wis" className="wis" onClick={() => addToWishlist(item)}>  
   <img src={heart} alt="" width="25vw" height="25vh"/>
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

             <button  className="atc" onClick={() => { addToCart(item);
    alert(`${item.title} added to cart!`);}}>Add to Cart</button>
 
 <button className="wis" onClick={() => addToWishlist(item)}>  
   <img src={heart} alt="" width="25vw" height="25vh"/>
          </button>
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
<button  className="atc" onClick={() => { addToCart(item);
    alert(`${item.title} added to cart!`);}}>Add to Cart</button>

<button className="wis" onClick={() => addToWishlist(item)}>  
   <img src={heart} alt="" width="25vw" height="25vh"/>
          </button>

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

            <button  className="atc" onClick={() => { addToCart(item);
    alert(`${item.title} added to cart!`);}}>Add to Cart</button>

<button className="wis"  onClick={() => addToWishlist(item)}>  
   <img src={heart} alt="" width="25vw" height="25vh"/>
          </button>

        </div>
      ))}
    </div>

    </div>
  );
}
