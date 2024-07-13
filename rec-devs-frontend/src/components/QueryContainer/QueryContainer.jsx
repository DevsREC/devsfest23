import React, { useState } from "react";

import './QueryContainer.css';

export default function QueryContainer({queryQues, queryAns}) {
    const [isClicked, setIsClicked] = useState(false);

    return(
        <div className={`query-card-container ${isClicked? 'active': ''}`} onClick={() => setIsClicked(prev => !prev)}>
            <div data-aos="fade-right" className="query-card-top-contianer">
                <div className="query-card-que">
                    {queryQues}
                </div>

                <div className={`query-card-icon ${isClicked? 'active': ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                    </svg>
                </div>
            </div>

            <div className="query-ans">
                {queryAns}
            </div>
        </div>
    )
}