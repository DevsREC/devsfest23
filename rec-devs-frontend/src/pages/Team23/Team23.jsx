import { useEffect, useState } from "react";
import './Team23.css';

import tg1 from '../../assets/tg1.webp';
import tg2 from '../../assets/tg2.webp';
import tg3 from '../../assets/tg3.webp';
import tg4 from '../../assets/tg4.webp';
import tg5 from '../../assets/tg5.webp';
import tg6 from '../../assets/tg6.webp';

const Team23 = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const imageList = [tg1, tg2, tg3, tg4, tg5, tg6];
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scroll(0, 0);

        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage + 1) % imageList.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [imageList.length]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="page-container team-page-container">
            <div className="section-head">
                <h1>🔥 Team23 🔥</h1>
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
                            <li><span>Ritesh</span><span>Project Lead</span></li>
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

                <div className="team-page-gallery">
                    <div className="bg" onClick={openModal}>
                        <img src={imageList[currentImage]} alt="Team Gallery" />
                    </div>
                    <div className="down">
                        {imageList.map((image, index) => (
                            <img
                                className={`sm-img ${currentImage === index ? 'active' : ''}`}
                                src={image}
                                alt={`Team ${index}`}
                                key={index}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={imageList[currentImage]} alt="Full View" />
                </div>
            )}
        </section>
    );
};

export default Team23;
