import React from 'react'
import meta from "../Assets/meta.png"


export default function Carousel() {
  return (
    <div>
      <div className='carousel-component'>

      <h3 className='carousel-heading'>Brands we have worked with</h3>

      </div>

      <div className="carousel">

   

        <div className="logo">
          <img src={meta} />
          <img src={meta} />
          <img src={meta} />
          <img src={meta} />
          <img src={meta} />
          <img src={meta} />
    
          
        </div>
      </div>
    </div>
  )
}
