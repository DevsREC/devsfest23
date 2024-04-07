import React from "react";

import './AnnouncementCard.css';

export default function AnnouncementCard({annTitle, annBrief, annLink}) {
    return(
        <div className="announcement-card-container">
            <div className="announcement-card-title">
                {annTitle}
            </div>
            <div className="announcement-brief-container">
                {annBrief}
            </div>
            <div className="announcement-link-container">
                <a href={annLink} target="_" className="ann-link">Click Here</a>
            </div>
        </div>
    )
}