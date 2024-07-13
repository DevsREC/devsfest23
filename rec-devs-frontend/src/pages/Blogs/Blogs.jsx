import React, { useEffect } from "react";

import './Blogs.css';
import BlogCard from "../../components/BlogCard/BlogCard";


import { BLOGS } from "../../data";

export default function Blogs() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return(
        <section className="blog-container page-container">
            <div className="section-head">
                <h1>
                    📝 Blogs 📝
                </h1>
            </div>
            <div className="section-explainer">
                Have a look at our <span>community curated</span> blogs!
            </div>
            <div className="blog-page-container">
                {
                    BLOGS.map((curr, key) => <BlogCard key={key} blogTitle={curr.blogTitle} blogImage={curr.blogThumb} blogId={curr.blogId} blogTag={curr.blogTag} />)
                }
            </div>
        </section>
    )
}