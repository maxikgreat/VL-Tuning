import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModelList = ({models}) => {

    const renderItems = () => {
        return models.data.map((item, index) => {
            return(
                <li key = {index}>{item.Name}</li>
            )
        })
    }

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
                <ul>
                    {renderItems()}
                </ul>
            </div>  
        </div>
    )
}

export default ModelList