import React from 'react';
import './style.css'

function Header() {
  return (
    <>
      <nav>
        <ul>
          <div class="loggaNav">
            <img src="../images/loggaHeader.png"></img>
            <h1>DevOps</h1>
          </div>
          <li><a href="/">Services</a></li>
          <li><a href="/">Our Team</a></li>
          <li><a href="/">Clients</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Contact us</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;