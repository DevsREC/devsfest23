import React from "react";

import './FAQ.css';
import QueryContainer from "../QueryContainer/QueryContainer";

export default function FAQ() {
    return(
        <div className="faq-container">
            <h1>FAQ's</h1>
            <div className="query-outer-container">
                <QueryContainer  queryQues={'What is DEVS REC all about?'} queryAns={'DEVS REC is a club that comprises of students of REC who are passionate about tech and wish to learn collaboratively and practically by building projects.'}/>
                <QueryContainer queryQues={'Who should you join this club?'} queryAns={'If you are someone who is already familiar with a tech stack and is eager to build projects with community support then this club is for you!'} />
                <QueryContainer queryQues={'What about beginners?'} queryAns={'There is no bar on beginners in joining the club. You can learn on the go with the help of your peers, seniors and mentors. All we ask is for self-driven people who are willing to commit to learn and build stuff together.'} />
                <QueryContainer queryQues={'How do I join?'} queryAns={'Check our socials and see if we are accepting new members currently'} />
            </div>
        </div>
    )
}