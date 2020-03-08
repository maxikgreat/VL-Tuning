import React from 'react'
import bgImgProduction from '../assets/images/production/productionBg.jpg'
import {useSelector} from 'react-redux'
import {useRouteMatch, Switch, Route, useParams} from 'react-router-dom'
import BrandsList from '../components/Store/BrandsList'
import ModelList from '../components/Store/ModelList'
import Item from '../components/Store/Item'
import Breadcrumbs from '../components/UI/Breadcrumbs'

const Production = () =>{

    //redux
    const fireDataBase = useSelector(state => state.dataBase)
    const {data} = fireDataBase

    console.log(data)

    const choseStuff = useSelector(state => state.choseStuff)
    const shoppingCart = useSelector(state => state.shoppingCart)

    //routing
    const {path, url} = useRouteMatch()
    const {typeStuff} = useParams()

    const {brand, model, stuff} = choseStuff

    const backgroundStyles = {
        backgroundImage: `url(${bgImgProduction})`
    }
    return(
        <section className = "production" style = {backgroundStyles}>
                <div className = "row m-4 h-100">
                    {/*TODO categories*/}
                    {/*<div className = "col-3">*/}
                    {/*    <Categories /> */}
                    {/*</div>*/}
                    <div className = "col-12">
                        <Breadcrumbs 
                            typeStuff = {typeStuff}
                            stuff = {stuff}
                            brand = {brand}
                            model = {model}
                        />
                        <Switch>
                            <Route exact path = {path}>
                                <BrandsList 
                                    brands = {data[choseStuff.stuff]}
                                    url = {url}
                                />
                            </Route>
                            <Route exact path = {`${path}/:brandUrl`}>
                                <ModelList 
                                    models = {data[choseStuff.stuff][choseStuff.brand]}
                                />
                            </Route>
                            <Route path = {`${path}/:brandUrl/:itemId`}>
                                <Item 
                                    cartItems = {shoppingCart.items}
                                    itemStuff = {choseStuff.model}
                                />
                            </Route>
                        </Switch>
                    </div>
                </div>
        </section>
    )
}


export default Production
