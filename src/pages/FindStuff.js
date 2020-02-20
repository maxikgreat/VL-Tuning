import React, {useEffect, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Stepper from '../components/FindStuff/Stepper'
import Button from '../components/UI/Button'
import {useSelector, useDispatch} from 'react-redux'
import {clearAll} from '../redux/choseStuff/choseStuffAction'

import bgImgFind from '../assets/images/findStuff/bgFind.jpg'


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
        switch(stuff){
            case "Ветровики":
                history.push('/production/door-visors')
                break;
            case "Мухобойки":
                history.push('/production/hood-protectors')
                break;
            case "Спойлера":
                history.push('/production/back-spoiler')
                break;
            case "Реснички":
                history.push('/production/headlight-visors')
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
        <section className = "findStuff" ref={findStuff} style = {backgroundStyles}>
            <Stepper />
            <div className = "findButton">
                <Button 
                    disabled = {(brand !== "") && (model !== null) && (stuff !== "") ? false : true}
                    onClickAction = {showProduction}
                >Find</Button>
            </div>
        </section>
    )
}

export default FindStuff