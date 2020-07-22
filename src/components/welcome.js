import React from 'react'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-info">
        <h1 className="welcome-header">WELCOME TO LAWN PRO</h1>
        <h3 className="welcome-bio">Lawn Maintenance Professionals</h3>
        
        <div className="welcome-form">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSsKyrZoYvQ2EYUlhtMDqhEp-KFXKyArqwKxAVqQIq9QOJxg/viewform">
            <h2>NEW CUSTOMER SIGN-UP</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Welcome;