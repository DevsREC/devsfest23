import React from "react";

import './YoutubeCard.css';

export default function YoutubeCard({link}) {
    return(
        <div className="youtube-video-container">
            <iframe src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}