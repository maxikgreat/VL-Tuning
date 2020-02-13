import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModelList = ({models}) => {
    return(
        <div className = "d-flex flex-column" style = {{marginTop: '-10px'}}>
            <div className = "titleSearch">
                    <input
                        // ref = {inputRef}
                        className = "filterItems"
                        type = "text" 
                        placeholder = "Type to filter"
                        //onInput = {() => {filterBrands()}}
                    />
                    <FontAwesomeIcon icon = "search" />
            </div>
            <div className = "modelContainer row">
                <h1>MODEL LIST SUKA </h1>
                {console.log(models)}
            </div>  
        </div>
    )
}

export default ModelList