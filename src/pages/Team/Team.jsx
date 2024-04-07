import React, {useEffect} from "react";

import './Team.css';

import pres from '/assets/president.jpeg';
import vice from '/assets/vice.jpg';
import vice2 from '/assets/vice2.jpg';
import sec from '/assets/sec.jpeg';

import TeamCard from "../../components/TeamCard/TeamCard";


export default function Team() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return(
        <section className="podcast-page-container">
            <div className="section-head">
                <h1>
                    🔥 Team 🔥
                </h1>
            </div>
            <div className="section-explainer">
                These are our <span>vibrant team</span> members who who makes all these possible
            </div>
            <div className="podcast-page-content-container">
                <TeamCard photo={pres} name={'Swayam S'} role={'President'} s1={'https://github.com/swayammedia'} s2={'https://www.linkedin.com/in/devswayam/'} s3={'https://instagram.com/swayam_ceo?igshid=ZDdkNTZiNTM='}/>
                <TeamCard photo={vice} name={'Venkatesh C'} role={'Vice-President'} s1={'https://github.com/Venkateshajay'} s2={'https://www.linkedin.com/in/venkateshajay04'} s3={'https://instagram.com/venkateshajay04?igshid=ZDdkNTZiNTM='}/>
                <TeamCard photo={vice2} name={'Shugavaneshwar R'} role={'Vice-President'} s1={'https://github.com/NickStrain'} s2={'https://www.linkedin.com/in/shuga-vaneshwar-922603226'} s3={'https://www.instagram.com/shuga._._._/'}/>
                <TeamCard photo={sec} name={'Jeyanth V'} role={'SECRETARY'} s1={'https://github.com/jeyanth-jr'} s2={'https://www.linkedin.com/in/jeyanth-v/'} s3={'https://www.instagram.com/jeyanth__jr/'}/>
            </div>
        </section>
    )
}