import React from "react";

import './P2PCard.css';

export default function P2PCard({domainName, domainMentors, whatsAppLink}) {
    return(
        <div className="p2p-card-outer-container">
            <div className="square"></div>
            <div className="p2p-card-container">
                <div className="p2p-card-head-container">
                    {domainName}
                </div>
                <span className="text-small">
                    Mentors
                </span>
                <div className="domain-mentor-list-container">
                    {
                        domainMentors.map(
                            mentor => {
                                return <>
                                        <div className="domain-mentor-photo-container">
                                            <img src={mentor.img} alt={mentor.name} className="mentor-photo" />
                                            <div className="domain-mentor-name-container">
                                                {mentor.name}
                                            </div>
                                        </div>
                                </>
                            }
                        )
                    }
                </div>

                <div className="domain-whatsapp-link-container">
                    <a href={whatsAppLink} target="_" className="domain-whatspp-link">
                        <span>
                            Join Whatsapp
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}