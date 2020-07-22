import React from 'react';

const We = () => {
  return (
    <div className="we-container">
      <h1 className="we-header">WE ARE GRASS PRO</h1>

      <div className="we-one">
        <video className="we-video" width="800" controls>
          <source src="mov_bbb.mp4" type="video/mp4" />
          <source src="mov_bbb.ogg" type="video/ogg" />
        </video>
      </div>

      <div className="we-two">
        <video className="we-video" width="800" controls>
          <source src="mov_bbb.mp4" type="video/mp4" />
          <source src="mov_bbb.ogg" type="video/ogg" />
        </video>
      </div>
    </div>
  )
}

export default We;