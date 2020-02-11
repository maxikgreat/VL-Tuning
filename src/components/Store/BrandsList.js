import React, {useState, useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setBrand} from '../../redux/choseStuff/choseStuffAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import filter from '../../helpFunctions/filter'
import {useHistory, Redirect} from 'react-router-dom'

const BrandsList = ({stuff, brand}) => {

    //refs
    const inputRef = useRef()
    const containerBrandsRef = useRef()

    //redux
    const dataBase = useSelector(state => state.dataBase)
    const {brands} = dataBase
    const dispatch = useDispatch()

    const [brandNames, set] = useState(brands.map(item => (item['name'])))

    const history = useHistory()

    const chooseBrand = (e) => {
        dispatch(setBrand(e.target.title))

        //TODO urls
        //let nameToUrl = e.target.title.toLowerCase().replace(" ", "-")
    }

    const renderItems = () => {
        return brands.map((item, index) => {
            return(
                <div 
                    className = "col-3 item" 
                    key = {index} 
                >
                    <img 
                        src = {item.src} 
                        alt={"Brand - " + item.name} 
                        title = {item.name}
                        onClick = {(e) => {chooseBrand(e)}}
                    />
                </div>
            )
        })
    }

    const filterBrands = () => {
        filter(brandNames, inputRef.current.value, containerBrandsRef.current)
    }

    return(
        <div className = "d-flex flex-column align-items-end" style = {{marginTop: '-10px'}}>
            <div className = "titleSearch">
                    <input
                        ref = {inputRef}
                        className = "filterItems"
                        type = "text" 
                        placeholder = "Type to filter"
                        onInput = {() => {filterBrands()}}
                    />
                    <FontAwesomeIcon icon = "search" />
            </div>
            <div className = "brandsContainer row" ref = {containerBrandsRef}>
                {renderItems()}
            </div>
        </div>
    )
}

export default BrandsList