import React, { useState } from "react";
import "../CSS/cards.css";
import img1 from "../Assets/review-image.png";
import img2 from "../Assets/css-form-2020-1.jpg";
import img3 from "../Assets/profile.jpg";

const Cards = () => {
  const [hoveredImage, setHoveredImage] = useState(img1);
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardHover = (image) => {
    setHoveredImage(image);
  };

  const toggleCard = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="card-container">
          <div
            className={`card`}
            onClick={toggleCard}
            onMouseEnter={() => handleCardHover(img2)}
            onMouseLeave={() => handleCardHover(img1)}
          >
            <div className="card-header">
              <div className="arrow"></div>
              Optimization
            </div>
          <div className="card-description">
              <ul>
                <li>LinkedIn Profile Optimization</li>
                <li>Content Creation</li>
                <li>Content Calendar and Analysis</li>
              </ul>
            </div>
            
          </div>
         
        
          




          <div
            className="card"
            onMouseEnter={() => handleCardHover(img3)}
            onMouseLeave={() => handleCardHover(img1)}
          >
            <div className="card-header">
              <div className="arrow"></div>
              Lead Generation
            </div>
            <div className="card-description">
              <ul>
                <li>LinkedIn Ad Campaign Management</li>
                <li>LinkedIn Ad Optimization</li>
                <li>Budgeting & Landing Page Optimization</li>
              </ul>
            </div>
          </div>

          <div
            className="card"
            onMouseEnter={() => handleCardHover(img2)}
            onMouseLeave={() => handleCardHover(img1)}
          >
            <div className="card-header">
              <div className="arrow"></div>
              Demand Generation
            </div>
            <div className="card-description">
              <ul>
                <li>LinkedIn & Web Strategy aligned with Marketing Goals</li>
                <li>Analytics & Conversion Optimization (LinkedIn & Web)</li>
                <li>LinkedIn Content Creation & Content Calendar</li>
              </ul>
            </div>
          </div>

          <div
            className="card"
            onMouseEnter={() => handleCardHover(img3)}
            onMouseLeave={() => handleCardHover(img1)}
          >
            <div className="card-header">
              <div className="arrow"></div>
              Personal Branding
            </div>
            <div className="card-description">
              <ul>
                <li>LinkedIn Profile Optimization</li>
                <li>Personal Brand Messaging & Brand Story</li>
                <li>LinkedIn Content Calendar & Idea Generation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item">
        <div className="image-container">
          <img src={hoveredImage} alt="Hovered Image" id="hover-image" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
