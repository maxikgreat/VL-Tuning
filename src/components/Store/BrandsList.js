import React, {useState, useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setBrand} from '../../redux/choseStuff/choseStuffAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import filter from '../../helpFunctions/filter'
import {useHistory, Redirect} from 'react-router-dom'
import deleteEmptyBrands from '../../helpFunctions/deleteEmptyBrands'

const BrandsList = ({brands}) => {

    //refs
    const inputRef = useRef()
    const containerBrandsRef = useRef()

    //redux
    const dispatch = useDispatch()

    useEffect(() => {
        inputRef.current.value = ""
        let brandsNames = getBrandsToRender().map(item => {
            return item.name
        })
        filter(brandsNames, inputRef.current.value, containerBrandsRef.current)
    })

    const getBrandsToRender = () => {
        const itemsToReturn = []

        if(deleteEmptyBrands(brands, true)){
            const brandsLocal = deleteEmptyBrands(brands, true)
            Object.keys(brandsLocal).forEach((item, index) => {
                itemsToReturn.push({
                    src: brandsLocal[item].srcLogo, 
                    name: Object.keys(brandsLocal)[index]
                })
            })
            console.log(itemsToReturn)
            return [...itemsToReturn]
        }
    }

    const chooseBrand = (e) => {
        dispatch(setBrand(e.target.title))
        //TODO urls
        //let nameToUrl = e.target.title.toLowerCase().replace(" ", "-")
    }

    const renderItems = () => {
        return getBrandsToRender().map((item, index) => {
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
        let brandsNames = getBrandsToRender().map(item => {
            return item.name
        })
        filter(brandsNames, inputRef.current.value, containerBrandsRef.current)
    }

    return(
        <div className = "d-flex flex-column" style = {{marginTop: '-10px'}}>
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