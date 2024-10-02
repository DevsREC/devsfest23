import React, { useState } from "react";

import './HeroVideoCard.css';

import video1 from '/assets/Devs_Website_Intro.webm'
// import video2 from '/assets/vr.webm'
// import video3 from '/assets/game.webm'

export default function HeroVideoCard() {
    const [isHeroHovered, setIsHovered] = useState(false);
    const [currentVideoState, setCurrentVideoState] = useState(0);

    const videoList = [
        {
            title: 'About Devs',
            link: '#',
            videoLink: video1,
            showButton: false,
            buttonName: ''
        },
        // {
        //     title: 'REC VR Experience',
        //     link: 'https://rec-experience.netlify.app/',
        //     videoLink: video2,
        //     showButton: true,
        //     buttonName: 'Experience Now'
        // },{
        //     title: 'REC Explore: The Game',
        //     link: '#',
        //     videoLink: video3,
        //     showButton: true,
        //     buttonName: 'Coming Soon'
        // }
    ]

    return(
        <div className="video-container"
         onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <video loop autoPlay muted src={videoList[currentVideoState].videoLink}></video>
            <div className={`video-overlay-container ${isHeroHovered? 'active': ''}`}>
                <div className="video-controls-container">
                    <button className="video-control">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>
                    </button>
                    <button className="video-control">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                        </svg>
                    </button>
                </div>

                <div className="overlay-name">
                    {videoList[currentVideoState].title}
                </div>
                {videoList[currentVideoState].showButton && <div className="overlay-link-container">
                    <a target="_" href={videoList[currentVideoState].link} className="overlay-button">
                        {videoList[currentVideoState].buttonName}
                    </a>
                </div>}
            </div>
        </div>
    )
}