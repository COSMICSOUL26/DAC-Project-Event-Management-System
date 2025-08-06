import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/slide1.jpg";
import img2 from "../images/slide2.jpg";
import img3 from "../images/slide3.jpg";
import logo from "../images/logoblackevent-removebg-preview.png";
import Nav from "./Nav";
//import "../styles/HomePage.css"; // use a separate css for clarity

const HomePage = () => {
  return (
    <div className="home-page">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={img1} className="d-block w-100 carousel-img" alt="Slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={img2} className="d-block w-100 carousel-img" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 carousel-img" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Overlay with content */}
      <div className="overlay-content text-center">
        <img src={logo} alt="ShubhKaryaa Logo" className="logo-img mb-4" />
        <h1 className="main-title">We create. You celebrate.</h1>
        <div className="d-grid col-3 mx-auto my-4">
          <Link to="/customer" className="home-btn">Customer</Link>
          <Link to="/employee" className="home-btn">Employee</Link>
        </div>

      </div>

      <Nav />
    </div>
  );
};

export default HomePage;
