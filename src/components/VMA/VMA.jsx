import React, { useState } from "react";

import './VMA.css';

export default function VMA() {
    const tabNameAndContent = [
        {
            'brief': 'To create a dynamic community of developers who are passionate about technology and innovation, and who collaborate to solve real-world problems and create value for society'
        },
        {
            'brief': 'Our goal is to inspire and empower our members to develop their skills, pursue their interests, and make a positive impact on the world through technology'
        },
        {
            'brief': 'Our club focuses on the following domains WEB DEV, APP DEV, GAME DEV, UI/UX, AI/ML, BLOCKCHAIN DEV, AR/VR/XR, IOT'
        }
    ]

    const [currentActive, setCurrentActive] = useState(0);

    function onClick(event, currentClickedId) {
        setCurrentActive(currentClickedId);
    }

    return(
        <div id="about-outer-container">
            <div className="about-menu-container">
                <a onClick={(event) => onClick(event, 0)} className={`about-tab-button ${currentActive==0? 'active': ''}`}>Vision</a>
                <a onClick={(event) => onClick(event, 1)} className={`about-tab-button ${currentActive==1? 'active': ''}`}>Mission</a>
                <a onClick={(event) => onClick(event, 2)} className={`about-tab-button ${currentActive==2? 'active': ''}`}>Area Of Interest</a>
            </div>
            <div key={currentActive} className="about-brief-container">
                {tabNameAndContent[currentActive].brief}
            </div>
        </div>
    )
}