import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ShoppingCart = ({onToggle, isOpen}) => {

    const shoppingCart = useRef(null)

    const toggleCart = (e) => {
        shoppingCart.current.classList.toggle("active")
    }

    return(
        <>
            <div 
                className = "shoppingCart" 
                ref = {shoppingCart}
            >
                <div 
                    className='s'
                    onClick = {e => {toggleCart(e)}}
                >
                    <FontAwesomeIcon icon = 'shopping-cart' />
                </div>
                <div className = "shoppingCartContent">
                    Content
                </div>
            </div>
        </>
    )
}

export default ShoppingCart