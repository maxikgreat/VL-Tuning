import React, {useEffect} from 'react'
import bgImgProduction from '../assets/images/production/productionBg.jpg'
import {useSelector} from 'react-redux'
import ProductList from '../components/ProductList'

const Production = () =>{


    const choseStuff = useSelector(state => state.choseStuff)

    const {brand, model, stuff} = choseStuff

    const backgroundStyles = {
        backgroundImage: `url(${bgImgProduction})`
    }
    return(
        <section className = "production" style = {backgroundStyles}>
                <div className = "row m-5">
                    <div className = "filtersContaitaner col-3">
                        <p>left</p>
                    </div>
                    <div className = "productionContainer col-9">
                        <h1>{stuff}</h1>
                    </div>
                </div>
        </section>
    )
}

export default Production

{/* <ProductList 
                    brand = {brand}
                    model = {model}
                    stuff = {stuff}
                /> */}