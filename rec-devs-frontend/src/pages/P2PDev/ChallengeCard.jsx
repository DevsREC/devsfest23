const ChallengeCard = ({challengeTitle, challengeBody, challengeDoc, challengeSubmit, challenegeIcon}) => {
    return(
        <div className="brutalist-card">
        <div className="brutalist-card__header">
            <div className="brutalist-card__icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                ></path> */}
                {challenegeIcon}
            </svg>
            </div>
            <div className="brutalist-card__alert">{challengeTitle}</div>
        </div>
        <div className="brutalist-card__message">
            {challengeBody}
        </div>
        <div className="brutalist-card__actions">
            <a className="brutalist-card__button brutalist-card__button--mark" href={challengeDoc} target="_">
                <span>Challenge 1</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-swords"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg></span>
            </a>
            <a className="brutalist-card__button brutalist-card__button--read" href={challengeSubmit}>
                <span>Submit</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg></span>
            </a>
        </div>
        </div>
    )
}

export default ChallengeCard;