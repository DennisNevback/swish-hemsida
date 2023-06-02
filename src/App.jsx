import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainpage from './mainpage.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import KalenderMain from './kalender/kalenderMain.jsx'

function App() {

  return (
    <>
      <Header />
      <KalenderMain />
      <Footer />
    </>
  )
}

export default App
