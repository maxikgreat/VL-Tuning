import React, {useState, useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setBrand, clearBrand, clearModel} from '../../redux/choseStuff/choseStuffAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import filter from '../../helpFunctions/filter'
import {Link} from 'react-router-dom'
import deleteEmptyBrands from '../../helpFunctions/deleteEmptyBrands'

const BrandsList = ({brands, url}) => {

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
        dispatch(clearBrand())
        dispatch(clearModel())
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
            return [...itemsToReturn]
        }
    }

    const chooseBrand = (brandName) => {
        dispatch(setBrand(brandName))
    }

    const renderItems = () => {
        if(getBrandsToRender() !== undefined){
            return getBrandsToRender().map((item, index) => {
                return(
                    <Link
                        to={`${url}/${item.name.replace(" ","-").toLowerCase()}`}
                        className = "col-3 item" 
                        key = {index} 
                        onClick = {() => {chooseBrand(item.name)}}
                    >
                        <img 
                            src = {item.src}
                            alt={"Brand - " + item.name} 
                            title = {item.name}
                        />
                    </Link>
                )
             })
        }
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

BrandsList.whyDidYouRender = true

export default React.memo(BrandsList)