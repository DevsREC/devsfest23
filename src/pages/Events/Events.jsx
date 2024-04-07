import React, {useEffect} from "react";

import ContestCard from "../../components/ContestCard/ContestCard";


import { EVENTS } from "../../data";

export default function Events() {
    useEffect(() => {
        window.scroll(0, 0)
    })
    
    return(
        <section className="contest-container">
        <div className="section-head">
            <h1>
                🎁 Events 🎁
            </h1>
        </div>
        <div className="section-explainer">
            Join and <span>learn</span> things in interactive way
        </div>
        <div className="contest-cards-container">
        {
            EVENTS.map((curr, key) => <ContestCard key={key} contestPoster={curr.eventImage} contestRegistrationLink={curr.eventLink} btnName={'Register Now'} />)
        }
        </div>
    </section>
    )
}