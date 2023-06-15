import React from "react";
import Dyota from '../Assets/DyotaFooter.svg';
import { Link } from "react-router-dom";
import About from "../screens/About";

export default function Footer() {
  return (
    <div>
        <div className="footer">
          <div className="inner-container">
            <div className="footer-logo">
              <img className="contact-logo" src={Dyota} />
            </div>
            <div className="footer-links">
              <p className="link-heading">Quick Links</p>
              <Link to='/about'>Dyota Way</Link>
              <a href="#services-section">Services</a>
              <a>Why Us</a>
              <a> </a>

            </div>
            <div className="footer-socials">
              <p className="link-heading">Socials</p>

              <a href="https://www.linkedin.com/company/dyotads/?trk=public_profile_topcard-current-company">
                <i className="fa fa-linkedin dimensions ">
                  <span> </span>LinkedIn
                </i>
              </a>

              <a  href="https://www.instagram.com/dyotalive/">
                <i className="fa fa-instagram dimensions ">
                  <span> </span>Instagram
                </i>
              </a>
             
              <a href="https://twitter.com/DyotaDigital">
                <i className="fa fa-twitter dimensions t">
                  <span> </span>Twitter
                </i>
              </a>
              <a href="https://twitter.com/DyotaDigital">
                  <span> </span>
               
              </a>
             
            </div>
            <div className="other-links">
              <p className="link-heading">Services</p>
              <a>Optimization</a>

              <a>Lead Generation</a>
              <a>Demand Generation</a>
              <a>Personal Branding</a>

            </div>
            <div className="footer-contacts">
              <p className="link-heading">Contact</p>
              
              <div className="footer-icons">
              <button className="footer-cta"><a className = 'cta-text'href="https://calendly.com/jatin-sood">Book a Meeting</a></button>

                <div className="footer-phone">
                <i  style = {{fontSize : "22px"}}className="fa fa-phone" ><span> </span>+91 7009058870</i>
                <p className="phonenumber"></p>
                </div>
                
              <div className="footer-mail">
                
                <i style = {{fontSize : "22px"}}className="fa fa-envelope" ><span> </span>hello@dyota.digital</i>
              </div>
                
              </div>

          
            </div>
          </div>
        </div>
      </div>
  );
}


