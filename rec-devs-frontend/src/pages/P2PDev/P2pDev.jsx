import ChallengeCard from './ChallengeCard';
import './p2pxdevs.css';

import ML_DOC from '../../assets/P2P_DEVS_ML_Challenge.pdf';
import CP_DOC from '../../assets/P2P_DEVS_CP_Challenge.pdf';
import AP_DOC from '../../assets/P2P_DEVS_APP_DEV_Challeng.pdf';
import GP_DOC from '../../assets/P2P_DEVS_Graphic_Design_Challenge.pdf';
import UX_DOC from '../../assets/P2P_DEVS_UX_Challenge.pdf';
import VD_DOC from '../../assets/P2P_DEVS_VD_Challenge.pdf';
import IT_DOC from '../../assets/P2P_DEVS_IoT_Challenge.pdf';

const P2PDevs = () => {
    return(
        <div className="page-container p2pxdevs">
            <div className="section-head">
                <h1>
                    📝 P2P X DevDays 📝
                </h1>
            </div>
            <div className="section-explainer">
                Ready to dive in <span>thrilling challenges</span>
            </div>
            <div className="p2p-dev-content-container">
                <ChallengeCard
                    challengeTitle={'App Development'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={AP_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'Web Development'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={'https://docs.google.com/document/d/18E2Hz7KnbdG8pDoOk4f17d1niZ9HqYOTHhnhq078R3E/edit?usp=sharing'}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panels-top-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'Cyber Security'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={'https://docs.google.com/document/d/1XyqCN_sUwGxUJ80f6U9oOwJ8uMM-Sv-0a9A7YKyYwWY/edit?usp=sharing'}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth-lock"><path d="M7 3.34V5a3 3 0 0 0 3 3"/><path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M12 2a10 10 0 1 0 9.54 13"/><path d="M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'Machine Learning'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={ML_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'Competitive Programming'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={CP_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chart-gantt"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'IoT'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={IT_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-microchip"><path d="M18 12h2"/><path d="M18 16h2"/><path d="M18 20h2"/><path d="M18 4h2"/><path d="M18 8h2"/><path d="M4 12h2"/><path d="M4 16h2"/><path d="M4 20h2"/><path d="M4 4h2"/><path d="M4 8h2"/><path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'Game Development'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={CP_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chart-gantt"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'Graphic Design'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={GP_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'UI/UX'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={UX_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>}
                />
                <ChallengeCard
                    challengeTitle={'Video Editing'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={VD_DOC}
                    challenegeIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-film"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>}
                />
                {/* <ChallengeCard
                    challengeTitle={'Machine Learning'}
                    challengeBody={'Hello content team give short description for this!'}
                    challengeDoc={ML_DOC}
                /> */}
            </div>
        </div>
    )
}

export default P2PDevs;