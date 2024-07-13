import React from "react";

import './LinkedinCard.css';

export default function LinkedinCard({link}) {
    return(
        <div className="youtube-video-container">
            <iframe src={link} height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> 
        </div>
    )
}