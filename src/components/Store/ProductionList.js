import React from 'react'
import {useSelector} from 'react-redux'
import svgFilter from '../../functions/svgFilter'

const ProductionList = () => {


    const db = useSelector(state => state.dataBase)

    const {logos} = db

    const extractName = (item) => {
        let name = item.split("/").pop();
        return name
    }

    const renderItems = () => {
        //let regex = '/([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx|.pdf)$/'

        return logos.map((item, index) => {
            console.log(extractName(item))
            return(
                <div className = "col-3 item" key = {index} >
                    <img src = {item}/>
                </div>
            )
        })
    }

    return(
        <>
            <div className = "productionContainer row">
                {renderItems()}
            </div>
        </>
    )
}

export default ProductionList