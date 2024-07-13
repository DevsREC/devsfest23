import React, { useEffect } from "react";

import './HomePage.css';
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import BorderImage from "../../components/BorderImage/BorderImage";
import BlogCardHome from "../../components/BlogCardHome/BlogCardHome";
import LinkButton from "../../components/LinkButton/LinkButton";
import PodcastCard from "../../components/PodcastCard/PodcastCard";
import VMA from "../../components/VMA/VMA";
import FAQ from "../../components/FAQ/FAQ";
import ContactForm from "../../components/ContactForm/ContactForm";
import HeroVideoCard from "../../components/HeroVideoCard/HeroVideoCard";
import { ANNOUNCEMENTS, BLOGS, PODCASTS } from "../../data";

export default function HomePage() {
    
    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return(
        <div className="home-page-container page-container">
            <section className="home-hero-container">
                <div className="hero-video-container">
                    <HeroVideoCard />
                </div>
            </section>

            <section className="announcement-container">
                <div className="section-head">
                    <h1>
                        📢 Announcement 📢
                    </h1>
                </div>
                <div className="section-explainer">
                    See the <span>latest updates</span> from the club!
                </div>
                <div className="ann-card-container">
                    {
                        ANNOUNCEMENTS.map((curr, key) => <AnnouncementCard key={key} annBrief={curr.announcementContent} annLink={curr.announcementLink} annTitle={curr.announcementTitle} />)
                    }
                </div>
            </section>

            <BorderImage />

            <section className="home-blog-container">
                <div className="section-head">
                    <h1>
                        📝 Blogs 📝
                    </h1>
                </div>
                <div className="section-explainer">
                    Have a look at our <span>community curated</span> blogs!
                </div>
                <div className="blog-home-container">
                    {
                        BLOGS.slice(0, 3).map((curr, key) => <BlogCardHome key={key} blogDomain={curr.blogTag} blogTitle={curr.blogTitle} blogId={curr.blogId} />)
                    }
                </div>
                <LinkButton btnTo={'/blog'} btnTitle={'View More'} />
            </section>

            <BorderImage />

            <section className="home-podcast-container">
                <div className="section-head">
                    <h1>
                        🎤 Podcasts 🎤
                    </h1>
                </div>
                <div className="section-explainer">
                    Listen to the <span>community sharing</span> things related to technology and careers
                </div>
                <div className="podcast-home-container">
                    {
                        PODCASTS.slice(0, 3).map((curr, key) => <PodcastCard key={key} podcastEmbedLink={curr.podcastLink} />)
                    }
                </div>
                <LinkButton btnTo={'/podcast'} btnTitle={'Listen More'} />
            </section>

            <BorderImage />

            <section className="about-container">
                <div className="section-head">
                    <h1>
                        ✨ About DEVS ✨
                    </h1>
                </div>
                <div className="section-explainer">
                    <span>About us</span>
                </div>
                <VMA />
                <div style={
                    {
                        margin: '10px auto',
                        maxWidth: '90%',
                        minWidth: '50%',
                        padding: '5px'
                    }
                } className="section-explainer">
                    We also organize various <span>contests and events </span> frequently. Check them out by clicking the button below!
                </div>
                <LinkButton btnTo={'/contest'} btnTitle={'Contests'} />
                <LinkButton btnTo={'/events'} btnTitle={'Events'} />

            </section>

            <BorderImage />

            <FAQ />

            <section style={
                {
                    marginTop: '10px'
                }
            } className="home-podcast-container">
                <div className="section-head">
                    <h1>
                        👋 Reach-out Us 👋
                    </h1>
                </div>
                <div className="section-explainer">
                    Still have <span>Doubts? Get to us</span> via this form
                </div>
                <div className="podcast-home-container">
                    <ContactForm />
                </div>
            </section>

        </div>
    )
}