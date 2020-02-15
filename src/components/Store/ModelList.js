import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useRouteMatch } from 'react-router-dom'

const ModelList = ({models}) => {

    const {path, url} = useRouteMatch()

    const renderItems = () => {
        return models.data.map((item, index) => {
            // console.log(item)
            return(
                    <Link 
                        key = {index}
                        className = "cardContainer col-4"
                        to={`${url}/${item.ID}`}
                    >
                        <div className = "cardPhoto">
                            <img src = {models.srcLogo} alt = "Brand Logo"/>
                        </div>
                        <div className = "cardContent">
                            <span className = "cardTitle">{item.Name}</span>
                            <span className = "cardVendor">created by {item.Manufacturer} </span>
                        </div>
                        {/* <span
                        className = {item.AvailableCount !== 0 ? "avaliable" : "notAvaliable"}
                        >{item.AvailableCount !== 0 ? "Есть в наличии" : "Нет в наличии"}</span> */}
                    </Link>
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
                {renderItems()}
            </div>  
        </div>
    )
}

export default ModelList