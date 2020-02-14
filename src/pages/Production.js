import React, {useEffect} from 'react'
import bgImgProduction from '../assets/images/production/productionBg.jpg'
import {useSelector} from 'react-redux'
import {useRouteMatch, Switch, Route, useParams} from 'react-router-dom'
import BrandsList from '../components/Store/BrandsList'
import ModelList from '../components/Store/ModelList'
import Categories from '../components/Store/Categories'
import Breadcrumbs from '../components/UI/Breadcrumbs'

const Production = () =>{

    //redux
    const dataBase = useSelector(state => state.dataBase)
    const choseStuff = useSelector(state => state.choseStuff)

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
                    <div className = "col-3">
                        <Categories />
                    </div>
                    <div className = "col-9">
                        <Breadcrumbs 
                            typeStuff = {typeStuff}
                            stuff = {stuff}
                            brand = {brand}
                            model = {model}
                        />
                        <Switch>
                            <Route exact path = {path}>
                                <BrandsList 
                                    brands = {dataBase[choseStuff.stuff]}
                                    url = {url}
                                />
                            </Route>
                            <Route path = {`${path}/:brandUrl`}>
                                <ModelList 
                                    models = {dataBase[choseStuff.stuff][choseStuff.brand]}
                                />
                            </Route>
                        </Switch>
                    </div>
                </div>
        </section>
    )
}

BrandsList.whyDidYouRender = true

export default Production
