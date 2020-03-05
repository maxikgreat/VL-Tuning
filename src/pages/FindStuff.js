import React, {useEffect, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Stepper from '../components/FindStuff/Stepper'
import Button from '../components/UI/Button'
import {useSelector, useDispatch} from 'react-redux'
import {clearAll} from '../redux/choseStuff/choseStuffAction'

import bgImgFind from '../assets/images/findStuff/bgFind.jpg'
import keyboardFix from "../helpFunctions/keyboardFix";


const FindStuff = () => {

    const choseStuff = useSelector(state => state.choseStuff)

    const {brand, model, stuff} = choseStuff

    const findStuff = useRef(null)

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        dispatch(clearAll())
    }, [dispatch])

    const showProduction = () => {

        const brandUrl = brand.replace(" ","-").toLowerCase()

        switch(stuff){
            case "Visors":
                history.push(`/production/door-visors/${brandUrl}/${model.ID}`)
                break;
            case "Chrome":
                history.push(`/production/door-visors-chrome/${brandUrl}/${model.ID}`)
                break;
            case "Hood":
                history.push(`/production/hood-protectors/${brandUrl}/${model.ID}`)
                break;
            case "Back":
                history.push(`/production/back-spoilers/${brandUrl}/${model.ID}`)
                break;
            default: 
                history.push('/')
                break;
        }
    }


    const backgroundStyles = {
        backgroundImage: `url(${bgImgFind})`
    }

    return(
        <section className = "findStuff mobile-container" ref={findStuff} style = {backgroundStyles}>
            <Stepper />
            <div className = "findButton">
                <Button 
                    disabled = {(brand !== "") && (model !== null) && (stuff !== "") ? false : true} // model is object
                    onClickAction = {showProduction}
                >Найти</Button>
            </div>
        </section>
    )
}

export default FindStuff