import React from "react";

import './ContestCard.css';

export default function ContestCard({contestPoster, contestRegistrationLink, btnName}) {
    return(
        <div className="contest-card-container">
            <div className="contest-card-image-container">
                <img src={contestPoster} className="contest-poster" />
            </div>
            <a target="_" href={contestRegistrationLink} className="btn-container">
                {btnName}
            </a>
        </div>
    )
}