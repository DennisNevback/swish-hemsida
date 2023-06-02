import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainpage from './mainpage.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Kalender from './kalender/kalender.jsx'

function App() {

  return (
    <>
      <Header />
      <Kalender />
      <Footer />
    </>
  )
}

export default App
