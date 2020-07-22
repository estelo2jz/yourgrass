import React from 'react'

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="test-header">Testimonials</h1>
      <div className="test-flex">
        <div className="test-video">
          <video width="700" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
          </video>
        </div>

        <div className="test-bio">
          <div>
            We are Dedicated to providing you with an Amazing Customer Experience.
          </div>
          <div>
            Please Call Today for a FREE  Estimate
          </div>
          <div>
            (222) 444-5555
          </div>
        </div>
      </div>
    </div>
  )
}


export default Testimonials;