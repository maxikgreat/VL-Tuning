import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TitleSearch = ({stuff}) => {
    return(
        <div className = "titleSearch">
            <h1>{stuff}</h1>
            <div>
                <input 
                    className = "filterItems"
                    type = "text" 
                    placeholder = "Type to filter"
                />
                <FontAwesomeIcon icon = "search" />
            </div>
        </div>
    )
}

export default TitleSearch