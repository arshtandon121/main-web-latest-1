import React, { useState } from 'react'
import reviewImage from "../Assets/review-image.png";
import profile from "../Assets/profile.jpg";
import background from "../Assets/background.svg";
export default function Review() {

  const items = [
    {
      name: 'Name of Client',
      designation: "Rudra Founder",
      description: `orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateindex = (newIndex) => {

    if (newIndex < 0) {

      setCurrentIndex(items.length - 1)

    }

    else if (newIndex >= items.length) {

      setCurrentIndex(0);
    }

    else {
      setCurrentIndex(newIndex);
    }

  }
  return (
    <div>
      <div className="review">

<div className='Head'>

        <p className='review-heading'>Hear from our Clients</p>
</div>
        <div className="review-card">
          <div className="profile">


          </div>

        
          <div className="review-elemnts">

            <h5 className='clientName'>{items[currentIndex].name}</h5>
            <p className="designation">{items[currentIndex].designation}</p>
            <p className="review-content">{items[currentIndex].description}</p>

          </div>



        </div>

        <div className='review-image'>

          <img className='im' src={reviewImage} />
        </div>
        {/* <div className="company-logo-container">
            <div className="company-logo"><img src={meta2} /></div>
            
            <div className="company-logo"><img src={tesla} /></div>
            <div className="company-logo"><img src={tesla} /></div>

            <div className="company-logo"><img src={meta2} /></div>

         


        </div> */}

      </div>
    </div>
  )
}


