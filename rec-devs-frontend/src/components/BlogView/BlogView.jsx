import React, { useEffect } from "react";

import './BlogView.css';

import img1 from '/assets/organic-flat-blog-post-illustration-with-people_23-2148955260.avif'
import ContactForm from "../ContactForm/ContactForm";
import BorderImage from "../BorderImage/BorderImage";
import { useParams } from "react-router-dom";
import { BLOGS } from "../../data";

export default function BlogView() {
    const { b } = useParams();
    console.log(b);
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return(
        <>
            <div className="content-container">
                <div className="page-top-container">
                    <div className="page-heading">
                     {BLOGS[b].blogTitle}
                    </div>
                    <div className="page-thumbnail">
                        <img  src={BLOGS[b].blogThumb} alt="Thumbnail" />
                        <div className="top-overlay"></div>
                    </div>
                </div>
                <div className="blog-tag-container">
                    <span>{BLOGS[b].blogTag}</span>
                </div>
                <div className="blog-by-container">
                    By, <i>{BLOGS[b].blogBy}</i>
                </div>
                <div className="page-content-container" >
                    {
                        BLOGS[b].blogContent
                    }
                </div>
            </div>
            <BorderImage />
            <h1 style={{textAlign: 'center'}}>✍️ Write To Us ✍️</h1>
            <ContactForm />  
        </>
    )
}