import React from 'react';
import './mainpage.css'

function Mainpage() {
    return (
        <>
            <header></header>
            <main>
                <div className="mainPageContainer">
                    <img src="../images/mainPageLogo.png" className="mainPageLogo" alt="Main Page Logo" />
                    <p className="slogan">Collaborate<br />Innovate<br />Excel</p>
                    <div className="learnMoreContainer">
                        <button type="button" className="learnMoreButton">Learn More</button>
                    </div>
                    <div className="rectangle">
                        <p className="introText">Welcome to SmartOps <br /> Your trusted DevOps Partner <br /> <br />Founded in 2023 - SmartOps strive to inspire more productive and flexible workflows</p>
                    </div>
                </div>
            </main>
            <footer></footer>
        </>
    );
}

export default Mainpage;