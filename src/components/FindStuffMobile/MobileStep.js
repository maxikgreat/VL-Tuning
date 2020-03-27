import React from 'react'
import DropdownList from '../UI/DropdownList'

const MobileStep = ({type, index, changePosX }) => {

    const fromEnToRu = (typeLocal) => {

        switch(typeLocal.toLowerCase()){
            case "stuff":
                return "аксессуар"
            case "brand":
                return "марку"
            case "model":
                return "модель"
            default:
                return type
        }
    }

    return(
        <div className = "mobileStep">
            <h2 className = "mb-1">{index}. Выбери <br /> <span className = "specialText">{fromEnToRu(type)}</span></h2>
            <DropdownList
                changePosX = {changePosX}
                valueType = {type}
            />
        </div>
    )
}


export default MobileStep