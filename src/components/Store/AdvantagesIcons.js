import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const AdvantageIcons = () => {
    return(
        <div className = "advIconsContainer row">
            <div className = "advIcon col-4">
                <FontAwesomeIcon icon = "car" />
                <span>на любимую машину</span>
            </div>
            <div className = "advIcon col-4">
                <FontAwesomeIcon icon = 'cloud-sun' />
                <span>в любую погоду</span>
            </div>
            <div className = "advIcon col-4">
                <FontAwesomeIcon icon = "bolt" />
                <span>крепкие и легкие</span>
            </div>
        </div>
    )
}

export default AdvantageIcons