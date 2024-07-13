import React, { useEffect } from "react";

import './P2PCard.css';

export default function P2PCard({domainName, domainMentors, whatsAppLink, linkedinLink, isCoordinator=true}) {
    useEffect(() => {
        window.scroll(0, 0);
    })

    return(
        <div className="p2p-card-outer-container">
            <div className="square"></div>
            <div className="p2p-card-container">
                <div className="scroll-hint">
                    SCROLL
                    <svg fill="currentColor" version="1.1" viewBox="0 0 26 26" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="currentColor" points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  "/><polygon fill="currentColor" points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "/></g></svg>
                </div>
                <div data-aos="fade-up" className="p2p-card-head-container">
                    {domainName}
                </div>
                <span data-aos="fade-right" className="text-small">
                    Mentors
                </span>
                <div className="domain-mentor-list-container">
                    {
                        domainMentors.map(
                            mentor => {
                                return <div className="domain-detail-container">
                                            <div className="domain-mentor-photo-container">
                                                <div className="photo-outer-container">
                                                    <img src={mentor.img} alt={mentor.name} className="mentor-photo" loading="lazy" />
                                                    <a href={mentor.linkedinLink} className="mentor-contact-button" target="_">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                                            </svg>
                                                        </span>
                                                        <p>
                                                            Linkedin
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="domain-mentor-name-container">
                                                            {mentor.name}
                                            </div>
                                        </div>
                            }
                        )
                    }
                </div>

                {!isCoordinator && <div className="domain-whatsapp-link-container">
                    <a href={whatsAppLink} target="_" className="domain-whatspp-link">
                        <span>
                            Join Whatsapp
                        </span>
                    </a>
                </div>}
            </div>
        </div>
    )
}