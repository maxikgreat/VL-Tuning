import React, {useState, useRef, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import filter from '../../helpFunctions/filter'

const ProductionList = ({stuff}) => {

    const inputRef = useRef()
    const containerBrandsRef = useRef()

    const db = useSelector(state => state.dataBase)

    const {brands} = db

    const [brandNames, set] = useState(brands.map(item => (item['name'])))

    //const [filteredBrands, filterBrands] = useState(db.brands)

    const renderItems = () => {
        return brands.map((item, index) => {
            return(
                <div className = "col-3 item" key = {index} >
                    <img 
                        src = {item.src} 
                        alt={"Brand - " + item.name} 
                        title = {item.name}
                    />
                </div>
            )
        })
    }

    const filterBrands = () => {

        filter(brandNames, inputRef.current.value, containerBrandsRef.current)
    }

    return(
        <>
            <div className = "titleSearch">
                <h1>{stuff}</h1>
                <div>
                    <input
                        ref = {inputRef}
                        className = "filterItems"
                        type = "text" 
                        placeholder = "Type to filter"
                        onInput = {() => {filterBrands()}}
                    />
                    <FontAwesomeIcon icon = "search" />
                </div>
            </div>
            <div className = "productionContainer row" ref = {containerBrandsRef}>
                {renderItems()}
            </div>
        </>
    )
}

export default ProductionList