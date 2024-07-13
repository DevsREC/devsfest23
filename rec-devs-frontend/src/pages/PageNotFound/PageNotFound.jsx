import React from "react";

import { Link } from "react-router-dom";

import './PageNotFound.css';

export default function PageNotFound() {
    return(
        <div className="page-not-found-container page-container">
            <div className="cont-">
                <h1>
                    404
                </h1>
                <span>Page Not Found!</span>
                <Link to={'/'} >Home</Link>
            </div>
        </div>
    )
}