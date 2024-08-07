import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import './BlogCardHome.css';
import Aos from "aos";

export default function BlogCardHome({blogTitle, blogDomain, blogId}) {
    return(
        <div className="blog-card-home-container">
            <div data-aos="fade-right"  className="blog-card-home-content-container">
                <div className="blog-card-home-title-container">
                    {blogTitle}
                </div>
                <div data-aos="fade-up"  className="blog-card-home-tag-container">
                    <span>{blogDomain}</span>
                </div>
            </div>

            <Link to={`/read/blog/${blogId}`} className="blog-card-home-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            </Link>
        </div>
    )
}