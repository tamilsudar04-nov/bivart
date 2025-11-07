import React from 'react'
import '../Styles/Home.css'

import sale from '/src/assets/sale.jpg' 
import br1 from "../assets/brands/br1.jpg";
import br2 from "../assets/brands/br2.jpg";
import br3 from "../assets/brands/br3.jpg";
import br4 from "../assets/brands/br4.jpg";
import br5 from "../assets/brands/br5.jpg";

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

export default function Home() {
  return (
    <div >
      <img className='pic' src={sale}  />
    <p className='bivart'>Bivart</p>
    <p className='fashion'>Fashion</p>
       <h1> TOP BRANDS</h1>
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
      
      </div>
  )
}
