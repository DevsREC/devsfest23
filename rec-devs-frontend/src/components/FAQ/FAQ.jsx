import React from "react";

import './FAQ.css';
import QueryContainer from "../QueryContainer/QueryContainer";

export default function FAQ() {
    return(
        <div className="faq-container">
            <h1>FAQ's</h1>
            <div className="query-outer-container">
                <QueryContainer  queryQues={'What is DEVS all about?'} queryAns={' Devs Rec is a REC student club comprised of tech enthusiasts, created to facilitate collaborative and practical learning through building projects.'}/>
                <QueryContainer queryQues={'Who should join this club?'} queryAns={'If you are someone who is already familiar with a tech stack and is eager to build projects with community support then this club is for you!'} />
                <QueryContainer queryQues={'What about beginners?'} queryAns={'You can learn on-the-go'} />
                <QueryContainer queryQues={'How do I join?'} queryAns={'Check our socials and see if we are currently accepting new members.'} />
            </div>
        </div>
    )
}