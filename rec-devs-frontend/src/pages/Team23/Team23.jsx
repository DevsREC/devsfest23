import { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Team23.css';
import Atropos from 'atropos/react';

import tg1 from '../../assets/tg1.avif';
import tg2 from '../../assets/tg2.avif';
import tg3 from '../../assets/tg3.avif';
import tg4 from '../../assets/tg4.avif';
import tg5 from '../../assets/tg5.avif';
import tg6 from '../../assets/tg6.avif';

gsap.registerPlugin(ScrollTrigger);

const Team23 = () => {
    const imageList = [tg1, tg2, tg3, tg4, tg5, tg6];
    const gallerRef = useRef();

    useEffect(() => {
        window.scroll(0, 0);
        if(!gallerRef.current) return;

        const galleryImages = gallerRef.current.querySelectorAll('.team-image');

        gsap.fromTo([galleryImages],
            {
                x: '-100%'
            },
            {
            x: '0%',
            scrollTrigger: {
                trigger: '.team-image',
                scrub: true,
                end: 'center center',

            },
            duration: .8,
            stagger: .4,
            ease: 'sine.inOut'
        })
    }, []);


    return (
        <section className="page-container team-page-container">
            <div className="section-head">
                <h1>🔥 Devs Founding Team'23 🔥</h1>
            </div>
            <div className="section-explainer">
                The following individuals form the founding team of <span>DEVSREC CLUB</span> of the year 2023. These dedicated members have come together to establish a strong foundation for the club, driving its <span>mission</span> and <span>vision</span> forward with <span>passion</span> and <span>commitment</span>.
            </div>

            <div className="team-page-name-container">
                <div className="team-name-card-container">
                    <h1 className="title">Core Members</h1>
                    <div className="name-container">
                        <ul>
                            <li><span>Swayam</span><span>Founder/President</span></li>
                            <li><span>Shuga</span><span>Vice-President</span></li>
                            <li><span>Venkatesh</span><span>Vice-President</span></li>
                            <li><span>Jeyanth</span><span>Secretary</span></li>
                            <li><span>Rithesh</span><span>Project Lead</span></li>
                            <li><span>Rishabh</span><span>Content Lead</span></li>
                            <li><span>Nandine</span><span>Event Lead</span></li>
                            <li><span>Varsha</span><span>Event Lead</span></li>
                            <li><span>Nevethitha</span><span>Club Coordinator</span></li>
                            <li><span>Karthi</span><span>Club Coordinator</span></li>
                        </ul>
                    </div>
                </div>
                <div className="team-name-card-container">
                    <h1 className="title">Board Members</h1>
                    <div className="name-container">
                        <ul>
                            <li>Dheva</li>
                            <li>Kishore</li>
                            <li>Naveen</li>
                            <li>Harshavardan</li>
                            <li>Mrithika</li>
                            <li>Jayashrinidhi</li>
                            <li>Harshini Akshaya</li>
                            <li>Pranitha</li>
                            <li>Tamanna</li>
                            <li>Sweatha</li>
                            <li>Adhithya</li>
                            <li>Ashwin</li>
                            <li>Naren</li>
                            <li>Brahadeesh</li>
                            <li>Niraimathi</li>
                            <li>Kamalesh</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="team-page-gallery-container">
                <div className="section-head">
                    <h1>🫰 Team Gallery 🫰</h1>
                </div>
                <div ref={gallerRef} className="team-page-gallery-image-container">
                    {
                        imageList.map((image, index) => <Atropos><img data-liquify="click" src={image} key={index} className="team-image" /></Atropos>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Team23;
