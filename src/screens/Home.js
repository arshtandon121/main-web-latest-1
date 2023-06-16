import React from "react";
import gif from "../Assets/gif.gif";
import Typed from "react-typed";
import Dyota from "../Assets/Dyota.svg";
import Credible from "../components/Credible";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Review from "../components/Review";
import contactBackground from "../Assets/contactBackground.svg";
import WhyUs from "../components/WhyUs";
import'../CSS/home.css'
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export default function Home() {
  const TypedText = () => {
    return (
      <Typed
        strings={[
          'Unleash the Power of Digital Advertising with Dyota!',
          'Take Your Brand to The Next Level!',
   
           ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    );
          }
   
  return (
    <div>
       <Navbar/>
      <div className="home-container">
        <div className="image-components">
          <p className="home-heading-typed">
 

            <p><TypedText /></p>
            
          </p>
          <p className="home-heading">
            Grow your business with our<i>cutting-edge</i>
            <br />
            Digital Marketing Solutions.
          </p>

        

          <div className="contained-button">
          
          <a href="#form-section">Get Started</a>
          </div>
         

          <div className="home-image">
            <img className="h1" src={gif} />
          </div>
        </div>
      </div>

       <div>
        <Carousel />
      </div>
      <div>
        <WhyUs />
      </div>

      <div>
        <Credible/>
      </div> 


      <div id="services-section">
        <Services />
      </div>
 
      <div id="Cards-main">
        <Cards/>
      </div>

      <div>
        <Review />
      </div>

      <div id="form-section" className="contact">
        <div className="details">
          <img className="contact-logo" src={Dyota} />

          <p className="details-heading">
            Dyota Digital Agency is a full-service digital marketing agency.
            <br></br> Attract, Impress, and Convert more leads online and get
            results with Dyota.
          </p>
          <div className="social">
             <a href="https://www.linkedin.com/company/dyotads/?trk=public_profile_topcard-current-company" ><i class="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/dyotalive/"><i class="fa fa-instagram"></i></a>
            <a href="https://twitter.com/DyotaDigital"><i class="fa fa-twitter"></i></a>
          </div>
        </div>

        <div className="form">
          <div className="form-heading">Let's Get Started!</div>
          <div className="form-subheading">
            Drop your details and we will contact you
          </div>

          <div className="input">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
  <button className='formbutton 'type="submit" value="Submit" ><a className = 'cta-text'ehref="#form-section">Contact Us</a></button>
            {/* <input className='formbutton'type="submit" value="Submit" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
