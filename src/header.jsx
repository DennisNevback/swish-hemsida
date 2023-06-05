import React from 'react';
import './style.css'
import { useState } from 'react';



function Header() {

  function myFunction() {
    var x = document.getElementsByClassName("menuItems");
    if (x[0].style.display === "none") {
      x[0].style.display = "block";
    } else {
      x[0].style.display = "none";
    }
  }

  return (
    <>
      <nav>
        <ul className='menuNav'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div class="loggaNav">
            <img src="../images/loggaHeader.png"></img>
            <h1>DevOps</h1>
          </div>
          <div className="menuItems">
            <li><a href="/">Services</a></li>
            <li><a href="/">Our Team</a></li>
            <li><a href="/">Clients</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Contact us</a></li>
          </div>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i class="fa fa-bars"></i>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Header;