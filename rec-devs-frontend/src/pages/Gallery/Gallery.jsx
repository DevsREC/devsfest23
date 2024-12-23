import React, {useEffect} from "react";

import './Gallery.css';

import img1 from '/assets/g1.jpg'
import img2 from '/assets/g2.jpg'
import img3 from '/assets/g3.jpg'
import img4 from '/assets/g4.jpg'
import img5 from '/assets/g5.jpg'
import img6 from '/assets/g6.jpg'
import img7 from '/assets/g7.jpg'
import img8 from '/assets/Devfest.webp'

export default function Gallery() {
    useEffect(() => {
        window.scroll(0, 0);
    })
        
    return(
        <section className="gallery-container page-container">
            <div className="section-head">
                <h1>
                    📷 Gallery 📷
                </h1>
            </div>
            <div className="section-explainer">
                 <span>Moments to Remember</span> 
            </div>
            
            <div className="gallery-cards-container">
                
            <div data-aos="zoom-in" className="gallery-image-container">
                    <img src='assets/g8.webp' className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src='assets/6.webp' className="gallery-image" />
                </div>

                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src={img2} className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src={img3} className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src={img5} className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src={img7} className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src='assets/1.webp' className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src='assets/2.webp' className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src='assets/3.webp' className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src='assets/4.webp' className="gallery-image" />
                </div>
                <div data-aos="zoom-in" className="gallery-image-container">
                    <img src='assets/5.webp' className="gallery-image" />
                </div>
            </div>
        </section>
    )
}