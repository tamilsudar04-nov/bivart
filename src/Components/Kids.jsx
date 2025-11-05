import React from "react";
import "../Styles/Kids.css";
import kids from "../assets/kids.jpg";

import kids2 from "../assets/kids2.jpg";
import kids3 from "../assets/kids3.jpg";
export default function Kids() {
  return (
    <div>
      

      {/* Carousel */}
      <div className="carousel">
        <div
          id="demo"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: "100%", height: "10%" }}
        >
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={kids}
                alt="bd1"
                className="bdpic1"
                style={{ width: "100%", height: "10%" }}
              />
              <div className="carousel-caption"></div>
            </div>

            <div className="carousel-item">
              <img
                src={kids3}
                alt="bd2"
                className="bdpic2"
                style={{ width: "100%", height: "10%" }}
              />
              <div className="carousel-caption"></div>
            </div>

            <div className="carousel-item">
              <img
                src={kids2}
                alt="bd3"
                className="bdpic3"
                style={{ width: "100%", height: "10%" }}
              />
              <div className="carousel-caption"></div>
            </div>
          </div>

          {/* Left and right controls/icons */}
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
    </div>
  );
}
