import React from 'react'
import '../Styles/Home.css'

import sale from '/src/assets/sale.jpg'; 
import br1 from "../assets/brands/br1.jpg";
import br2 from "../assets/brands/br2.jpg";
import br3 from "../assets/brands/br3.jpg";
import br4 from "../assets/brands/br4.jpg";
import br5 from "../assets/brands/br5.jpg";

import s11 from "../assets/sarees/s11.jpg";
import k11 from "../assets/kurtis/k11.jpg";
import b11 from "../assets/bottom/b11.jpg";
import d16 from "../assets/dress/d16.jpg";
import f11 from "../assets/formals/f11.jpg";
import c2 from "../assets/casuals/c2.jpg";
import ts11 from "../assets/tshirts/ts11.jpg";
import j11 from "../assets/jeans/j11.jpg";
import y2 from "../assets/boys/y2.jpg";
import y1 from "../assets/boys/y1.jpg";
import q1 from "../assets/girls/q1.jpg";
import q11 from "../assets/girls/q11.jpg";
import dis from "../assets/dis.jpg";
import vid1 from "../assets/vid1.mp4";

const brands = [
  {
    id: 1,
    image: br1,
    brand1: "HIGHLANDER",
    brand2: "KETCH",
    tagline: "Casual. Cool. Confident",
    offer: "Min. 70% Off",
  },
  {
    id: 2,
    image: br2,
    brand1: "TOKYO TALKIES",
    brand2: "SASSAFRAS",
    tagline: "Where Glam Meets the Wild West",
    offer: "Min. 70% Off",
  },
  {
    id: 3,
    image: br3,
    brand1: "Berrylush",
    brand2: "STREET9",
    tagline: "Shine with Confidence",
    offer: "Min. 65% Off",
  },
  {
    id: 4,
    image: br4,
    brand1: "DENISON",
    brand2: "Fubar Fashions",
    tagline: "Timeless Style",
    offer: "Min. 65% Off",
  },
  {
    id: 5,
    image: br5,
    brand1: "Bhama Couture",
    brand2: "Shae by SASSAFRAS",
    tagline: "Ethereal Beauty",
    offer: "Min. 60% Off",
  },
];

const women = [
  {
    id: 1,
    image: s11,
    brand1: "HIGHLANDER",
    brand2: "KETCH",
    tagline: "Casual. Cool. Confident",
    offer: "Min. 70% Off",
  },
  {
    id: 2,
    image: k11,
    brand1: "TOKYO TALKIES",
    brand2: "SASSAFRAS",
    tagline: "Where Glam Meets the Wild West",
    offer: "Min. 70% Off",
  },
  {
    id: 3,
    image: b11,
    brand1: "Berrylush",
    brand2: "STREET9",
    tagline: "Shine with Confidence",
    offer: "Min. 65% Off",
  },
   {
    id: 4,
    image: d16,
    brand1: "HIGHLANDER",
    brand2: "KETCH",
    tagline: "Casual. Cool. Confident",
    offer: "Min. 70% Off",
  },
  ];
  const men=[
  {
    id: 1,
    image: f11,
    brand1: "TOKYO TALKIES",
    brand2: "SASSAFRAS",
    tagline: "Where Glam Meets the Wild West",
    offer: "Min. 70% Off",
  },
    {
    id: 2,
    image: c2,
    brand1: "Berrylush",
    brand2: "STREET9",
    tagline: "Shine with Confidence",
    offer: "Min. 65% Off",
  },
   {
    id: 3,
    image: ts11,
    brand1: "HIGHLANDER",
    brand2: "KETCH",
    tagline: "Casual. Cool. Confident",
    offer: "Min. 70% Off",
  },
  {
    id: 4,
    image: j11,
    brand1: "TOKYO TALKIES",
    brand2: "SASSAFRAS",
    tagline: "Where Glam Meets the Wild West",
    offer: "Min. 70% Off",
  },];
  const kids=[
  {
    id: 1,
    image: y2,
    brand1: "Berrylush",
    brand2: "STREET9",
    tagline: "Shine with Confidence",
    offer: "Min. 65% Off",
  },
   {
    id: 2,
    image: y1,
    brand1: "HIGHLANDER",
    brand2: "KETCH",
    tagline: "Casual. Cool. Confident",
    offer: "Min. 70% Off",
  },
  {
    id:3,
    image: q1,
    brand1: "Berrylush",
    brand2: "STREET9",
    tagline: "Shine with Confidence",
    offer: "Min. 65% Off",
  },
   {
    id: 4,
    image: q11,
    brand1: "HIGHLANDER",
    brand2: "KETCH",
    tagline: "Casual. Cool. Confident",
    offer: "Min. 70% Off",
  },
  
];

export default function Home() {
  return (
    <div >
      <img className='pic' src={sale}  />
    <p className='bivart'>Bivart</p>
    <p className='fashion'>Fashion</p>
       <h1 className='tb'> TOP BRANDS</h1>
      <div className="brand-container">
      {brands.map((item) => (
        <div key={item.id} className="brand-card">
          <img src={item.image} alt={item.brand1} className="brand-img" />
          <div className="brand-info">
            <h4>
              {item.brand1} <span>{item.brand2}</span>
            </h4>
            <p className="tagline">{item.tagline}</p>
            <p className="offer">{item.offer}</p>
          </div>
        </div>
      ))}
    </div>
   
    <img className='dis' src={dis} alt="" />
    <p className='flat'>  Flat ₹399 OFF   <br /> +  Free Shipping On your First Order </p>
      <p className='code'> TAMIL04 </p>
    <h1 className='tb'>Shop By Category</h1>
   <h1 className='tb'> WOMEN'S WEAR</h1>
      <div className="brand-container">
      {women.map((item) => (
        <div key={item.id} className="brand-card">
          <img src={item.image} alt={item.brand1} className="brand-img" />
          <div className="brand-info">
            <h4>
              {item.brand1} <span>{item.brand2}</span>
            </h4>
            <p className="tagline">{item.tagline}</p>
            <p className="offer">{item.offer}</p>
          </div>
        </div>
      ))}
    </div>
    <h1 className='tb'> MEN'S WEAR</h1>
      <div className="brand-container">
      {men.map((item) => (
        <div key={item.id} className="brand-card">
          <img src={item.image} alt={item.brand1} className="brand-img" />
          <div className="brand-info">
            <h4>
              {item.brand1} <span>{item.brand2}</span>
            </h4>
            <p className="tagline">{item.tagline}</p>
            <p className="offer">{item.offer}</p>
          </div>
        </div>
      ))}
    </div>
    <h1 className='tb'> KIDS WEAR</h1>
      <div className="brand-container">
      {kids.map((item) => (
        <div key={item.id} className="brand-card">
          <img src={item.image} alt={item.brand1} className="brand-img" />
          <div className="brand-info">
            <h4>
              {item.brand1} <span>{item.brand2}</span>
            </h4>
            <p className="tagline">{item.tagline}</p>
            <p className="offer">{item.offer}</p>
          </div>
        </div>
      ))}
    </div>

    <video autoPlay loop muted className='vid'><source src={vid1}  width='80%'/></video>



 
    <div className="footer">

      <div className="footer-left">

        <div>
          <h4>ONLINE SHOPPING</h4>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home</p>
          <p>Beauty</p>
          <p>Genz</p>
          <p>Gift Cards</p>
          <p>Myntra Insider</p>

          <h4 className="mt">USEFUL LINKS</h4>
          <p>Blog</p>
          <p>Careers</p>
          <p>Site Map</p>
          <p>Corporate Information</p>
          <p>Whitehat</p>
          <p>Cleartrip</p>
          <p>Myntra Global</p>
        </div>

        <div>
          <h4>CUSTOMER POLICIES</h4>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Privacy policy</p>
          <p>Grievance Redressal</p>
          <p>FSSAI Food Safety</p>
          <p>Connect app</p>
        </div>

        <div>
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>

          <div className="app-flex">
           
          </div>

          <h4 className="mt">KEEP IN TOUCH</h4>
          <div className="social-flex">
            
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="footer-right">
        <div className="right-item">
          
          <p><b>100% ORIGINAL</b> guarantee for all products at myntra.com</p>
        </div>

        <div className="right-item">
          
          <p><b>Return within 14days</b> of receiving your order</p>
        </div>
      </div>

    </div>


      </div>
  )
}
