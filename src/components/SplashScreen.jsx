import React from 'react'
import '../css/SplashScreen.css'
import FullLogo from '../assets/mm-logo.png'

const SplashScreen = ({ exiting = false }) => {
  return (
    <div className={`splash ${exiting ? 'splash--exit' : ''}`} role="status" aria-live="polite">
      <div className="splash__content">
        <img src={FullLogo} alt="MM Developers" className="splash__logo" />
        <div className="splash__loader-container">
          <div className="splash__loader">
            <div className="splash__loader-ring"></div>
            <div className="splash__loader-ring splash__loader-ring--2"></div>
            <div className="splash__loader-ring splash__loader-ring--3"></div>
          </div>
          <div className="splash__dots">
            <div className="splash__dot"></div>
            <div className="splash__dot"></div>
            <div className="splash__dot"></div>
          </div>
          <p className="splash__text">Crafting Excellence</p>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
