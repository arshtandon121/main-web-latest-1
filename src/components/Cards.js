import React from 'react';
import "../CSS/cards.css";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">Optimization</div>
        <div className="card-description">
          <ul>
            <li>LinkedIn Profile Optimization</li>
            <li>Content Creation</li>
            <li>Content Calendar and Analysis</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Lead Generation</div>
        <div className="card-description">
          <ul>
            <li>LinkedIn Ad Campaign Management</li>
            <li>LinkedIn Ad Optimization</li>
            <li>Budgeting & Landing Page Optimization</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Demand Generation</div>
        <div className="card-description">
          <ul>
            <li>LinkedIn & Web Strategy aligned with Marketing Goals</li>
            <li>Analytics & Conversion Optimization (LinkedIn & Web)</li>
            <li>LinkedIn Content Creation & Content Calendar</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Personal Branding</div>
        <div className="card-description">
          <ul>
            <li>LinkedIn Profile Optimization</li>
            <li>Personal Brand Messaging & Brand Story</li>
            <li>LinkedIn Content Calendar & Idea Generation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
