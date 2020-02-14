import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ModelList = ({models}) => {

    const [cardsBg, setBg] = useState([])

    useEffect(() => {
        const filesSrc = require.context('../../assets/images/production/cards', false,  /\.(png|jpg|svg)$/)
        const cardsBg = filesSrc.keys().map(filesSrc)
        setBg([...cardsBg])
    }, [])

    const renderItems = () => {
        return models.data.map((item, index) => {
            return(
                <>
                    <div className = "itemBackground col-4" style = {{backgroundImage: `url(${cardsBg[Math.floor(Math.random() * 3)]})`}}>
                        <div 
                            key = {index} 
                            className = "itemContainer" 
                        >
                            <span>{item.Name}</span>
                            <span
                                className = {item.AvailableCount !== 0 ? "avaliable" : "notAvaliable"}
                            >{item.AvailableCount !== 0 ? "Есть в наличии" : "Нет в наличии"}</span>
                        </div>
                    </div>
                </>
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