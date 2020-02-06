import React from 'react'
import {useSelector} from 'react-redux'

const ProductionList = () => {


    const db = useSelector(state => state.dataBase)

    const {logos} = db

    const extractName = (item) => {
        let name = item.split("/").pop().replace(/\.[^/.]+$/, "")
        let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
        return nameCapitalized.replace("_"," ")
    }

    const renderItems = () => {
        //let regex = '/([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx|.pdf)$/'
        return logos.map((item, index) => {
            return(
                <div className = "col-3 item" key = {index} >
                    <img 
                        src = {item} 
                        alt={"Brand " + extractName(item)} 
                        title = {extractName(item)}
                    />
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