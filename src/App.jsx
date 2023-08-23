import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mainpage from './mainpage.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import KalenderMain from './kalender/kalenderMain.jsx'


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route path="/kalender" element={<KalenderMain />} />
      </Routes>
      <Footer />
    </Router >
  )
}

export default App
