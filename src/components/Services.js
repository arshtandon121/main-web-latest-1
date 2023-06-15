import React, { useEffect, useState } from "react";
import icon from "../Assets/icon.jpg";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      heading: 'Optimization',
      description:  `<li>LinkedIn Profile Optimization</li>
      <li>Content Creation</li>
      <li>Content Calendar and analysis</li>`
    },
    {
      heading: 'Lead Generation',
      description: `<li>LinkedIn Ad Campaign Management</li>
      <li>LinkedIn Ad Optimization</li>
      <li>Budgeting & landing page optimization</li>`,
    },
    {
      heading: 'Demand Generation',
      description: `<li>LinkedIn & Web Strategy aligned with Marketing Goals</li>
      <li>Analytics & conversion optimization (LinkedIn & Web)</li>
      <li>LinkedIn Content creation & Content calendar`
    },
    {
      heading: 'Personal Branding',
      description: `<li>LinkedIn Profile Optimization</li>
      <li> Personal Brand Messaging & Brand Story</li>
      <li>LinkedIn Content Calendar & Idea Generation</li>`
    },
  ];

  const setIndex = (index) => {
    if (index === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(currentIndex);
    }, 3000); // Change the interval duration (in milliseconds) as desired

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="services">
      <div className="services-heading">Our Digital Marketing Expertise</div>

      <div className="service-components">
        <div className="services-description">
          We specialize in <span>LinkedIn</span> campaigns, focusing on enhancing brand
          awareness and cultivating leads, specifically for Business to Business
          companies
        </div>

        {/* <div className="service-card">
          <div className="service-card-heading">
            {items[currentIndex].heading}
          </div>

          <div className="service-card-description" dangerouslySetInnerHTML={{ __html: items[currentIndex].description }}></div>

        </div> */}
      </div>
    </div>
  );
}
