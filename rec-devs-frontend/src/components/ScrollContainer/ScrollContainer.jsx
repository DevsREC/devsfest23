import ReactLenis from "lenis/react"


const ScrollContainer = ({ children }) => {


    return(
        <ReactLenis root options={
            {
                lerp: 1.5,
                duration: 3.5,
                smoothTouch: true,
                syncTouch: true
            }
        }>
            {children}
        </ReactLenis>
    )
}

export default ScrollContainer;