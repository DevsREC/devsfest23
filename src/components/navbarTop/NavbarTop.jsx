import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '/assets/devs-white.png'

import './NavbarTop.css';


export default function NavbarTop() {
    const [isNavClicked, setIsNavClicked] = useState(false);


    return(
        <>
            <header className="nav-top-container">
                <div className="nav-top-left-contanier">
                    <img src={logo} alt="Club Logo" className="logo-container"/>
                </div>

                <div className="nav-top-right-container">
                    <button className="nav-top-icon-container" onClick={() => setIsNavClicked(prev => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={
                            {
                                transform: isNavClicked?`rotate(180deg)`: ''
                            }
                        } width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </button>
                </div>

            </header>

            <div className={`nav-menu-container ${isNavClicked? 'active': ''}`}>
                <Link to="/" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Home</Link>
                <Link to="/blog" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Blogs</Link>
                <Link to="/peer-to-peer" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Peer-to-Peer</Link>
                <Link to="/podcast" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Podcasts</Link>
                <Link to="/contest" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Contests</Link>
                <Link to="/events" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Events</Link>
                <Link to="/gallery" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Gallery</Link>
                <Link to="/team" onClick={() => setIsNavClicked(prev => !prev)} className="nav-menu poppins-medium">Team</Link>
            </div>

            {isNavClicked && <div className="overlay"></div>}
        
        </>
    )
}