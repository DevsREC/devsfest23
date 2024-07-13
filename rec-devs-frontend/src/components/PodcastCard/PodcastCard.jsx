import React from "react";

import './PodcastCard.css';


export default function PodcastCard({podcastEmbedLink}) {
    return(
        <div data-aos="fade-up" className="podcast-conatainer">
            <iframe src={podcastEmbedLink}  frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    )
}