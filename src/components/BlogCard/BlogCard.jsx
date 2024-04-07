import React from "react";

import './BlogCard.css';
import LinkButton from "../LinkButton/LinkButton";

import defaultimg from '/assets/organic-flat-blog-post-illustration-with-people_23-2148955260.avif'

export default function BlogCard({blogImage, blogTag, blogTitle, blogId}) {
    return(
        <div className="blog-card-container">
            <div className="blog-image-container">
                <img src={blogImage || defaultimg} alt="" className="blog-image" />
            </div>
            <div className="blog-tag-container">
                {blogTag}
            </div>
            <div className="blog-title-container">
                {blogTitle}
            </div>
            <LinkButton btnTo={`/read/blog/${blogId}`} btnTitle={'Read'}/>
        </div>
    )
}