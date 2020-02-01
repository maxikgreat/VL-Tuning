import React from 'react'
import {useSpring, animated} from 'react-spring'
import RadioList from './UI/RadioList'


const Filter = ({type}) => {

    const styledBoxes = useSpring({
        to: {opacity: 1, transform: "translateX(0)"},
        from: {opacity: 0, transform: "translateX(-100%)"},
    })

        return(
            <animated.div style = {styledBoxes}>
                <RadioList type = {type}/>
            </animated.div>
        )
}


export default Filter