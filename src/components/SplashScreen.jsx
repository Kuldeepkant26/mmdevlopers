import React from 'react'
import '../css/SplashScreen.css'
import FullLogo from '../assets/FullLogo_Transparent.png'

const SplashScreen = ({ exiting = false }) => {
  return (
    <div className={`splash ${exiting ? 'splash--exit' : ''}`} role="status" aria-live="polite">
      <div className="splash__content">
        <img src={FullLogo} alt="MM Developers" className="splash__logo" />
        <div className="splash__loader">
          <div className="splash__dot"></div>
          <div className="splash__dot"></div>
          <div className="splash__dot"></div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
