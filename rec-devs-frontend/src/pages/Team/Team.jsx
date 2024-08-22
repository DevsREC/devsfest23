import React, {useEffect} from "react";

import './Team.css';

import pres24 from '/assets/pres24.webp';
import vice24 from '/assets/vice24.webp';
import vice242 from '/assets/vice242.webp';
import sec24 from '/assets/sec24.jpg';

import TeamCard from "../../components/TeamCard/TeamCard";
import { Link } from "react-router-dom";


export default function Team() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return(
        <section className="podcast-page-container page-container">
            <div className="section-head">
                <h1>
                    🔥 Team 🔥
                </h1>
            </div>
            <div className="section-explainer">
                These are our <span>vibrant team</span> members who make all this possible
            </div>
            <div className="podcast-page-content-container">
                <div style={
                    {
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap'
                    }
                }>
                    <TeamCard photo={'assets/revathy.jpeg'} name={'Dr P. Revathy'} role={''} s1={'#'} s2={'#'} s3={'#'}/>
                    <TeamCard photo={'assets/sorna.jpeg'} name={'Ms. Sorna Shanthi'} role={''} s1={'#'} s2={'#'} s3={'#'}/>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'
                }}>
                    <TeamCard
                        photo={pres24}
                        name={'Hursun S S'}
                        role={'President'}
                        s1={'https://github.com/Dunking-Dunk?tab=repositories'}
                        s2={'https://www.linkedin.com/in/hursun-ss-377659233'}
                        s3={'https://www.instagram.com/__hursun_ss__'}
                    />
                    <TeamCard
                        photo={vice24}
                        name={'Manovikram'}
                        role={'Vice-President'}
                        s1={'https://github.com/manov-ik'}
                        s2={'https://www.linkedin.com/in/manovikramk'}
                        s3={'https://www.instagram.com/manov_ik'}
                    />
                    <TeamCard
                        photo={vice242}
                        name={'THIRUMURUGAN A.K.S'}
                        role={'Vice-President'}
                        s1={'https://github.com/AKSTHIRUMURUGAN'}
                        s2={'https://www.linkedin.com/in/a-k-s-thirumurugan-57b230211?trk=contact-info'}
                        s3={'https://www.instagram.com/thirumurugan374/'}
                    />
                    <TeamCard
                        photo={sec24}
                        name={'Dhiksha Shrivruthi G '}
                        role={'SECRETARY'}
                        s1={'https://github.com/DhikshaG'}
                        s2={'https://www.linkedin.com/in/dhiksha-shrivruthi-g-93897b258/'}
                        s3={'https://www.instagram.com/dhikshashrivruthi'}
                    />
                </div>
                <Link to="/team-last" className="batch-button">
                    <span className="text">Batch 22-23</span>
                    <span className="box"></span>
                </Link>
            </div>
        </section>
    )
}