import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setModel, clearModel} from '../../redux/choseStuff/choseStuffAction'

const ModelList = ({models}) => {

    //redux
    const dispatch = useDispatch()
    //route
    const {url} = useRouteMatch()

    const choseModel = (item) => {
        dispatch(setModel(item))
    }

    const renderItems = () => {
        return models.data.map((item, index) => {
            return(
                    <Link 
                        key = {index}
                        className = "cardContainer col-6 col-lg-3"
                        to={`${url}/${item.ID}`}
                        onClick = {() => {choseModel(item)}}
                    >
                        <div className = "cardPhoto">
                            <img src = {models.srcLogo} alt = "Brand Logo"/>
                        </div>
                        <div className = "cardContent">
                            <span className = "cardTitle">{item.Name}</span>
                            {item.Manufacturer === "Unknown" ? null :
                                <span className = "cardVendor">Изготовитель {item.Manufacturer} </span>
                            }
                        </div>

                    </Link>
            )
        })
    }

    return(
        <div className = "d-flex flex-column" style = {{marginTop: '-10px'}}>
            <div className = "titleSearch" style = {{visibility: "hidden", opacity: 0}}>
                    {/* <input
                        //ref = {inputRef}
                        className = "filterItems"
                        type = "text" 
                        placeholder = "Type to filter"
                        //onInput = {() => {filterBrands()}}
                    />
                    <FontAwesomeIcon icon = "search" /> */}
            </div>
            <div className = "modelContainer row" id = "scrollModels">
                {renderItems()}
            </div>  
        </div>
    )
}

export default ModelList