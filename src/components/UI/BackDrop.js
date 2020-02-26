import React from 'react'

import {useDispatch} from 'react-redux'
import {toggleCart} from '../../redux/shoppingCart/shoppingCartAction'


const BackDrop = () => {

    const dispatch = useDispatch()
    
    return(
        <div 
            className = "backDrop"
            onClick = {() => dispatch(toggleCart())}
        >
        </div>
    )
}

export default BackDrop