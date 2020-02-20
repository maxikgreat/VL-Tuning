import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const AdvantageIcons = () => {
    return(
        <div className = "advIconsContainer row">
            <div className = "advIcon col-4">
                <FontAwesomeIcon icon = "car" />
                <span>on favourite car</span>
            </div>
            <div className = "advIcon col-4">
                <FontAwesomeIcon icon = 'cloud-sun' />
                <span>weather - no matter</span>
            </div>
            <div className = "advIcon col-4">
                <FontAwesomeIcon icon = "bolt" />
                <span>strong and light</span>
            </div>
        </div>
    )
}

export default AdvantageIcons