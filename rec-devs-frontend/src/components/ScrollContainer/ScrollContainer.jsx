import ReactLenis from "lenis/react"


const ScrollContainer = ({ children }) => {


    return(
        <ReactLenis root options={
            {
                lerp: .01,
                duration: .3,
                syncTouch: true,
                smoothWheel: true
            }
        }>
            {children}
        </ReactLenis>
    )
}

export default ScrollContainer;