import React, {useEffect} from 'react'
import bgImgProduction from '../assets/images/production/productionBg.jpg'
import {useSelector} from 'react-redux'
import TitleSearch from '../components/Store/TitleSearch'
import ProductionList from '../components/Store/ProductionList'

const Production = () =>{


    const choseStuff = useSelector(state => state.choseStuff)

    const {brand, model, stuff} = choseStuff

    const backgroundStyles = {
        backgroundImage: `url(${bgImgProduction})`
    }
    return(
        <section className = "production" style = {backgroundStyles}>
                <div className = "row m-4">
                    <div className = "filtersContaitaner col-3">
                        <p>left</p>
                    </div>
                    <div className = "col-9">
                        <TitleSearch stuff = {stuff}/>
                        <ProductionList />
                    </div>
                </div>
        </section>
    )
}

export default Production
