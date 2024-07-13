import React, { useEffect } from "react";

import './Podcast.css';

import PodcastCard from "../../components/PodcastCard/PodcastCard";
import YoutubeCard from "../../components/YoutubeCard/YoutubeCard";
import LinkedinCard from "../../components/LinkedinCard/LinkedinCard";
import BorderImage from "../../components/BorderImage/BorderImage";
import { PODCASTS } from "../../data";

export default function Podacast() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return(
        <section className="podcast-page-container page-container">
            <div className="section-head">
                <h1>
                    🎤 Podcasts 🎤
                </h1>
            </div>
            <div className="section-explainer">
            Listen to the <span>community sharing</span> things related to technology and careers
            </div>
            <div className="podcast-page-content-container">
                {
                    PODCASTS.map((curr, key) => <PodcastCard key={key} podcastEmbedLink={curr.podcastLink} />)
                }
                <BorderImage />
                <h1>🏢 Career Talks 🏢</h1>
                <YoutubeCard link={"https://www.youtube.com/embed/2DW6IHIVg_Y?si=O0sdVtc3T7sFgeNT"} />
                <LinkedinCard link={"https://www.linkedin.com/video/embed/live/urn:li:ugcPost:7088457863706148864"} />
            </div>
        </section>
    )
}