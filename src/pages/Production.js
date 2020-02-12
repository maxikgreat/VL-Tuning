import React, {useEffect} from 'react'
import bgImgProduction from '../assets/images/production/productionBg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector} from 'react-redux'
import BrandsList from '../components/Store/BrandsList'
import ModelList from '../components/Store/ModelList'
import Categories from '../components/Store/Categories'
import Breadcrumbs from '../components/UI/Breadcrumbs'

const Production = () =>{

    const dataBase = useSelector(state => state.dataBase)
    const choseStuff = useSelector(state => state.choseStuff)

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
                            stuff = {stuff}
                            brand = {brand}
                            model = {model}
                        />

                        {stuff && brand ? 
                            <ModelList 
                                brand = {brand}
                            />
                            :
                            <BrandsList 
                                brands = {dataBase[choseStuff.stuff]}
                            />
                        }

                    </div>
                </div>
        </section>
    )
}

export default Production
