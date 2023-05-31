import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {

  return (
    <>
      <div className="mainPageContainer">
        <img src="../images/mainPageLogo.png" class="mainPageLogo"></img>
        <p class="slogan">Collaborate
          Innovate
          Excel</p>
        <div className="learnMoreContainer">
          <button type="button" class="learnMoreButton">Learn More</button>
        </div>
        <div className="rectangle">
          <p classname="introText">Welcome to SmartOps
            Your trusted DevOps Partner
            Founded in 2023 - SmartOps strive to inspire more productive and flexible workflows</p>
        </div>
      </div>
    </>
  )
}

export default App
