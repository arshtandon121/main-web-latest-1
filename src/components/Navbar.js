import React from "react";
import { Link } from "react-router-dom";
import DyotaNavbar from "../Assets/Dyota.svg";
import "../CSS/navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navlogo">
          <Link to="/" className="">
            <img src={DyotaNavbar} />
          </Link>
        </div>

        <ul className="nav-items">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/about">
            About Us
          </Link>
          <li className="nav-item" to="">
            <a href="#services-section">Services</a>
          </li>
          <div className="nav-item nav-btn" to="">
            <a style={{color : "#e0701d"}} ehref="#form-section">Contact Us</a>
          </div>
        </ul>
      </div>
    </div>
  );
}
