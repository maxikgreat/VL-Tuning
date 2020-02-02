import React, {useEffect, useRef} from 'react'
import bgTwoParts from '../../assets/images/aboutUs/aboutUsBg.jpg'


const TwoPartsComp = () => {

    const leftPart = useRef()
    const rightPart = useRef()

    useEffect(() => {
        leftPart.current.classList.add("loadedPart")
        rightPart.current.classList.add("loadedPart")
    }, [])

    const backgroundStyles = {
        backgroundImage: `url(${bgTwoParts})`
    }
        return(
            <section style = {backgroundStyles}>
                <div className = "row h-100">
                    <div className = "col-6 left" ref = {leftPart}>
                        <div className = "content">
                            <h2>Part 1</h2>
                            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
                        </div>
                    </div>
                    <div className = "col-6 right" ref = {rightPart}>
                        <div className = "content">
                            <h2>Part 2</h2>
                            <p>Lorem ipsum lorem ipsum lorem ipsum</p>
                         </div>
                    </div>
                </div>
            </section>
        )
}

export default TwoPartsComp