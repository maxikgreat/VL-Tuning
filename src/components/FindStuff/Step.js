import React from 'react'
import {useSpring, animated} from 'react-spring'
import DropdownList from '../UI/DropdownList'

const Step = ({type}) => {

    const animatedStep = useSpring({
        to: {opacity: 1, transform: "translateX(0)", minWidth: '100%'},
        from: {opacity: 0, transform: "translateX(-100%)", minWidth: '100%'}
    })

    const fromEnToRu = (typeLocal) => {

        switch(typeLocal.toLowerCase()){
            case "stuff":
                return "аксессуар"
            case "brand":
                return "марку"
            case "model":
                return "модель"
            default:
                return type
        }
    }
    
        return(
            <animated.div style = {animatedStep}>
                <h2 className = "mb-1">Выбери <br /> <span className = "specialText">{fromEnToRu(type)}</span></h2>
                <DropdownList 
                    valueType = {type}
                />
            </animated.div>
        )
}


export default Step