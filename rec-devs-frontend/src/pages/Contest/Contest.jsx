import React, { useEffect } from "react";

import './Contest.css';
import ContestCard from "../../components/ContestCard/ContestCard";

import { CONTESTS } from "../../data";

export default function Contest() {
    useEffect(() => {
        window.scroll(0, 0)
    })
    
    return(
        <section className="contest-container page-container">
        <div className="section-head">
            <h1>
                🏆 Contests 🏆
            </h1>
        </div>
        <div className="section-explainer">
            Compete with the <span>community</span> for fun!
        </div>
        <div className="contest-cards-container">
            {
                CONTESTS.length === 0?
                <h1 style={{textAlign: 'center'}}>None for now!</h1>
                :
                CONTESTS.map((curr, key) => <ContestCard key={key} contestPoster={curr.contestImage} contestRegistrationLink={curr.contestLink} btnName={'See Challeneges'} />)
            }
        </div>
    </section>
    )
}