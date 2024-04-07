import React from "react";

import './p2p.css';
import P2PCard from "../../components/P2PCard/P2PCard";

export default function PeerToPeer() {
    return(
        <div className="p2p-page-container">
            <div className="section-head">
                <h1>
                    Peer-to-peer
                </h1>
            </div>

            <div className="p2p-moto-container">
                <h1>What is Peer-To-Peer?</h1>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore nihil nostrum officia totam voluptas nisi sunt natus consequuntur asperiores!
                </span>
            </div>

            <div className="p2p-page-card-container">
                <P2PCard
                    domainName={'WebDev'}
                    domainMentors={[{
                        name: 'Dhanush',
                        img: 'assets/Dhanush.jpg'
                    },
                    {
                        name: 'Purushothaman M',
                        img: 'assets/Purushothaman M.jpg'
                    },
                    {
                        name: 'Mohammed Noumaan Ahamed',
                        img: 'assets/Mohammed Noumaan Ahamed.jpg'
                    }]}
                    whatsAppLink={'#'}
                />
                <P2PCard
                    domainName={'WebDev'}
                    domainMentors={[{
                        name: 'Dhanush',
                        img: 'assets/Dhanush.jpg'
                    },
                    {
                        name: 'Purushothaman M',
                        img: 'assets/Purushothaman M.jpg'
                    },
                    {
                        name: 'Mohammed Noumaan Ahamed',
                        img: 'assets/Mohammed Noumaan Ahamed.jpg'
                    }]}
                    whatsAppLink={'#'}
                />
                <P2PCard
                    domainName={'WebDev'}
                    domainMentors={[{
                        name: 'Dhanush',
                        img: 'assets/Dhanush.jpg'
                    },
                    {
                        name: 'Purushothaman M',
                        img: 'assets/Purushothaman M.jpg'
                    },
                    {
                        name: 'Mohammed Noumaan Ahamed',
                        img: 'assets/Mohammed Noumaan Ahamed.jpg'
                    }]}
                    whatsAppLink={'#'}
                />
            </div>

        </div>
    )
}