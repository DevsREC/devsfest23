import React from "react";

import './LinkButton.css';

import { Link } from "react-router-dom";

export default function LinkButton({btnTitle, btnTo}) {
    return(
        <Link to={btnTo} className="link-button">
            {btnTitle}
        </Link>
    )
}