import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuantityCounter = ({quantity, changeQuantity}) => {

    const inc = (e) => {
        e.preventDefault()
        changeQuantity(++quantity)
    }

    const dec = (e) => {
        e.preventDefault()
        if(quantity > 1){
            changeQuantity(--quantity)
        }
    }

    return(
        <div className = "quantityCounter">
            <FontAwesomeIcon icon = "minus" onClick = {(e) => {dec(e)}}/>
            <span>{quantity}</span>
            <FontAwesomeIcon icon = "plus" onClick = {(e) => {inc(e)}}/>
        </div>
    )
}

export default QuantityCounter