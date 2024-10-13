import React from "react";

import './p2p.css';
import P2PCard from "../../components/P2PCard/P2PCard";


export default function PeerToPeer() {
    return(
        <div className="p2p-page-container page-container">
            <div className="section-head">
                <img src="/assets/p2p_head.webp" alt="Peer-to-peer" />
            </div>

            <div className="p2p-video-explainer-container">
                <video src="assets/p2pfinal.mp4" autoPlay loop controls controlsList="nodownload"></video>
            </div>

            {/* <div className="p2p-video-explainer-container">
                <iframe
                    src="https://www.youtube.com/embed/ergd3B2yaWQ?autoplay=1&loop=1&controls=1&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div> */}

            <div className="p2p-moto-container">
                <h1>What is Peer-To-Peer?</h1>
                <span>
                Welcome to DEVS REC's fresh initiative - Peer-to-Peer Learning Hub!
                <br />
                Join us in this journey to build a supportive learning community.
                <br />
                Whether you're a novice diving into a new tech stack or an expert seeking to collaborate with REC's top tech minds, our hub has got you covered with the best mentors for every tech domain to aid you on your journey!
                <br />
                <span className="p2p-moto-points">
                ✨ Find study buddies to engage in insightful discussions
                </span>
                <span className="p2p-moto-points">
                ✨ Share roadmaps, resources, and content tailored to various tech domains
                </span>
                <span className="p2p-moto-points">
                ✨ Assist each other in resolving queries
                </span>
                <span className="p2p-moto-points">
                ✨ Explore diverse and difficult topics with others
                </span>
                <span className="p2p-moto-points">
                ✨ And most importantly, learn from and with your peers
                </span>
                <span className="p2p-moto-points">
                Let's make learning together cool again!🔥
                </span>
                Connect, collaborate, and grow with us at the Peer-to-Peer Learning Hub of DEVS REC, where mentors are available round the clock for any questions.
                <br />
                The best are here ⬇️
                </span>
            </div>

            <div className="p2p-join-container">
                <a href="https://chat.whatsapp.com/HXctutnYrNUH2QYuqbbukq" target="_" className="p2p-join-btn">
                    Join Technical Community!
                </a>
                <br />
                <a href="https://chat.whatsapp.com/J2k14biIqAy0BH74m2yglZ" target="_" className="p2p-join-btn">
                    Join Design Community!
                </a>
            </div>
            <center>
                <h2>Mentors</h2>
            </center>
            <div className="p2p-page-card-container">
                <P2PCard
                    domainName={'WebDev'}
                    isCoordinator={false}
                    domainMentors={[
                        {
                            name: 'Livesh ',
                            img: 'assets/liv.jpg',
                            linkedinLink: 'https://linkedin.com/in/livesh-m-85a057251/'
                        },
                        {
                            name: 'Hursun',
                            img: 'assets/pres24.webp',
                            linkedinLink: 'https://www.linkedin.com/in/hursun-ss-377659233/'
                        },
                        {
                            name: 'A.K.S. Thirumurugan',
                            img: 'assets/vice242.webp',
                            linkedinLink: 'https://www.linkedin.com/in/a-k-s-thirumurugan-57b230211/'
                        },
                        {
                            name: 'Abraham',
                            img: 'assets/Abraham Samuel E.webp',
                            linkedinLink: 'https://www.linkedin.com/in/abraham-samuel-e/'
                        },
                        {
                            name: 'Vignesh C',
                            img: 'assets/vignesh.JPG',
                            linkedinLink: 'https://www.linkedin.com/in/vignesh-chellapandi-2207b5257/'
                        },
                        {
                            name: 'Nithya Shree',
                            img: 'assets/nithya1.webp.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/nithya-shree-a17a57269/'
                        },
                        {
                            name: 'Dhanush TS',
                            img: 'assets/DhanushTs.webp',
                            linkedinLink: 'https://www.linkedin.com/in/dhanush-t-s-734481271/'
                        },
                    ]}
                    whatsAppLink={'assets/DEVS_Web_Development_roadmap_v1.pdf'}
                />
                <P2PCard
                    domainName={'App Development'}
                    domainMentors={[
                        {
                            name: 'Soniya',
                            img: 'assets/Soniya.webp',
                            linkedinLink: 'https://www.linkedin.com/in/soniyavijay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },
                        {
                            name: 'Hursun',
                            img: 'assets/pres24.webp',
                            linkedinLink: 'https://www.linkedin.com/in/hursun-ss-377659233/'
                        },
                        {
                            name: 'Rakhul',
                            img: 'assets/Rakhul.webp',
                            linkedinLink: 'https://www.linkedin.com/in/rakhul/'
                        },
                        // {
                        //     name: 'SivaKumar',
                        //     img: 'assets/',
                        //     linkedinLink: ''
                        // },
                        {
                            name: 'A.K.S. Thirumurugan',
                            img: 'assets/vice242.webp',
                            linkedinLink: 'https://www.linkedin.com/in/a-k-s-thirumurugan-57b230211/'
                        }
                    ]}
                    whatsAppLink={'assets/DEVS_App_Development_roadmap_v1.pdf'}
                    isCoordinator={false}
                />
                <P2PCard
                    domainName={'ML'}
                    domainMentors={[
                        {
                            name: 'Dhiksha Shrivruthi',
                            img: 'assets/Dhiksha Shrivruthi.webp',
                            linkedinLink: 'https://www.linkedin.com/in/dhiksha-shrivruthi-g-93897b258/'
                        },
                        {
                            name: 'Hursun',
                            img: 'assets/pres24.webp',
                            linkedinLink: 'https://www.linkedin.com/in/hursun-ss-377659233/'
                        },
                        {
                            name: 'Ashwin JD',
                            img: 'assets/jd.webp',
                            linkedinLink: 'https://www.linkedin.com/in/aswin-jd-349860257/'
                        }
                        ,
                        {
                            name: 'Dheekshith',
                            img: 'assets/dheek.webp',
                            linkedinLink: 'https://www.linkedin.com/in/dheekshith-t-5168a0257/'
                        },
                        {
                            name: 'Nithya Shree',
                            img: 'assets/nithya1.webp.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/nithya-shree-a17a57269/'
                        },
                        {
                            name: 'Manovikram',
                            img: 'assets/vice24.webp',
                            linkedinLink: 'https://www.linkedin.com/in/manovikramk/'
                        }


                    ]}
                    whatsAppLink={'assets/DEVS_ML_roadmap_v1.pdf'}
                    isCoordinator={false}
                />
                <P2PCard
                    domainName={'Cyber Security'}
                    domainMentors={[
                        {
                            name: 'Ritesh',
                            img: 'assets/rithesh_full.webp',
                            linkedinLink: 'https://www.linkedin.com/in/rithesh-s-05617b22a/'
                        },
                        {
                            name: 'Jerin BS',
                            img: 'assets/Jerin BS.webp',
                            linkedinLink: 'https://linkedin.com/in/jerin-b-s'
                        }
                    ]}
                    whatsAppLink={'assets/DEVS_Cyber_Security_roadmap_v1.pdf'}
                    isCoordinator={false}
                />
                <P2PCard
                    domainName={'IOT'}
                    domainMentors={[
                        {
                            name: 'A.K.S. Thirumurugan',
                            img: 'assets/vice242.webp',
                            linkedinLink: 'https://www.linkedin.com/in/a-k-s-thirumurugan-57b230211/'
                        },
                        // {
                        //     name: 'Balaji',
                        //     img: 'assets/',
                        //     linkedinLink: ''
                        // },

                        // {
                        //     name: 'Arunachalam',
                        //     img: 'assets/',
                        //     linkedinLink: ''
                        // },

                        {
                            name: 'Suhaib',
                            img: 'assets/msv.webp',
                            linkedinLink: 'https://www.linkedin.com/in/mohammed-suhaib-vajeer/ '
                        },
                        {
                            name: 'Hursun',
                            img: 'assets/pres24.webp',
                            linkedinLink: 'https://www.linkedin.com/in/hursun-ss-377659233/'
                        },
                    ]}
                    whatsAppLink={'assets/DEVS_IOT_roadmap_v1.pdf'}
                    isCoordinator={false}
                />
                <P2PCard
                    domainName={'UI/UX'}
                    isCoordinator={false}
                    domainMentors={[
                        {
                            name: 'Sudheer',
                            img: 'assets/Sudheer.webp',
                            linkedinLink: 'http://www.linkedin.com/in/yallankisudheer'
                        },
                        {
                            name: 'SHARON STEVE J',
                            img: 'assets/SHARON STEVE J.webp',
                            linkedinLink: 'https://www.linkedin.com/in/sharon-steve-j-80b933248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                        },
                        {
                            name: 'Purushothaman M',
                            img: 'assets/Purushothaman M.webp',
                            linkedinLink: 'https://www.linkedin.com/in/purushothaman-m-b4ba9122b/'
                        },
                        {
                            name: 'Abraham',
                            img: 'assets/Abraham Samuel E.webp',
                            linkedinLink: 'https://www.linkedin.com/in/abraham-samuel-e/'
                        },
                        {
                            name: 'Niraimathi A K',
                            img: 'assets/Niraimathi A K.webp',
                            linkedinLink: 'https://www.linkedin.com/in/niraimathi-a-k-905064241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },
                        {
                            name: 'Shyam Prasath R',
                            img: 'assets/Shyam Prasath R.webp',
                            linkedinLink: 'https://www.linkedin.com/in/shyamprasath-r'
                        },
                        // {
                        //     name: 'Rishi',
                        //     img: 'assets/',
                        //     linkedinLink: ''
                        // },
                        {
                            name: 'Manovikram',
                            img: 'assets/vice24.webp',
                            linkedinLink: 'https://www.linkedin.com/in/manovikramk/'
                        }
                    ]}
                    whatsAppLink={'assets/DEVS_Design_roadmap_v1.pdf'}
                />
                <P2PCard
                    domainName={'Video editing'}
                    domainMentors={[
                        {
                            name: 'Adithya',
                            img: 'assets/adi.webp',
                            linkedinLink: 'https://www.linkedin.com/in/a-k-s-thirumurugan-57b230211/'
                        },
                        {
                            name: 'Anand',
                            img: 'assets/anand.webp',
                            linkedinLink: 'https://www.linkedin.com/in/anand-subramanian-680757304/'
                        },

                        {
                            name: 'Nandha Kumar',
                            img: 'assets/nandha.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/nandha-kumar-p-1627b6257'
                        },

                        {
                            name: 'Suhaib',
                            img: 'assets/msv.webp',
                            linkedinLink: 'https://www.linkedin.com/in/mohammed-suhaib-vajeer/ '
                        },
                        {
                            name: 'Saswat Vishal',
                            img: 'assets/saswat.jpeg',
                            linkedinLink: 'https://www.linkedin.com/in/saswat-vishal-e-v-67a3b62a2/'
                        },
                        // {
                        //     name: 'Akash',
                        //     img: 'assets/',
                        //     linkedinLink: ''
                        // },

                    ]}
                    isCoordinator={false}
                    whatsAppLink={'assets/DEVS_VIDEO_EDITING_ROADMAP.pdf'}
                />
                <P2PCard
                    domainName={'Comp. Programming'}
                    domainMentors={[
                        {
                            name: 'Manovikram',
                            img: 'assets/vice24.webp',
                            linkedinLink: 'https://www.linkedin.com/in/manovikramk/'
                        } ,
                        {
                            name: 'Dhiksha Shrivruthi',
                            img: 'assets/Dhiksha Shrivruthi.webp',
                            linkedinLink: 'https://www.linkedin.com/in/dhiksha-shrivruthi-g-93897b258/'
                        },
                        {
                            name: 'Livesh ',
                            img: 'assets/liv.jpg',
                            linkedinLink: 'https://linkedin.com/in/livesh-m-85a057251/'
                        },

                    ]}
                    whatsAppLink={'assets/DEVS_CP_ROADMAP_V1.pdf'}
                    isCoordinator={false}
                />
                <P2PCard
                    domainName={'Game Development'}
                    domainMentors={[
                        // {
                        //     name: 'Vignesh C',
                        //     img: 'assets/vignesh.webp',
                        //     linkedinLink: 'https://www.linkedin.com/in/vignesh-chellapandi-2207b5257/'
                        // },
                        {
                            name: 'Venkatesh C',
                            img: 'assets/vice.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/venkateshajay04/'
                        },
                        {
                            name: 'Naveen',
                            img: 'assets/Naveen.webp',
                            linkedinLink: 'https://www.linkedin.com/in/naveen-k-129877255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },
                        {
                            name: 'Aswin A ',
                            img: 'assets/liv.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/aswin-a-735930257/'
                        }
                    ]}
                    whatsAppLink={'assets/DEVS_GAME_DEV_roadmap_v1.pdf'}
                    isCoordinator={false}
                />

                {/* <P2PCard
                    domainName={'Design'}
                    domainMentors={[
                        {
                            name: 'Abraham Samuel E',
                            img: 'assets/Abraham Samuel E.webp',
                            linkedinLink: 'https://www.linkedin.com/in/abraham-samuel-e/'
                        },
                        {
                            name: 'Kavibalan. P',
                            img: 'assets/Kavibalan. P.webp',
                            linkedinLink: 'https://www.linkedin.com/in/kavibalan-p-166934257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },

                        {
                            name: 'Harshavardhan K K',
                            img: 'assets/Harshavardhan K K.webp',
                            linkedinLink: 'https://www.linkedin.com/in/harshavardhan-k-k-7b7ba2236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },

                    ]}
                /> */}


            </div>


            <div className="p2p-page-footer-container">
                <P2PCard
                    domainName={'P2P Co-ordinators'}
                    domainMentors={[
                        {
                            name: 'Anand',
                            img: 'assets/anand.webp',
                            linkedinLink: 'https://www.linkedin.com/in/anand-subramanian-680757304/'
                        },
                        {
                            name: 'Sri Praveen',
                            img: 'assets/sripraveen.JPG',
                            linkedinLink: 'https://www.linkedin.com/in/sri-praveen-r-496ab1293/'
                        },
                        {
                            name: 'Nithya Shree',
                            img: 'assets/nithya1.webp.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/nithya-shree-a17a57269/'
                        },
                    ]}
                    isCoordinator={true}
                />
            </div>

        </div>
    )
}
