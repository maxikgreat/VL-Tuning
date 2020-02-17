import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'

//TODO RELOAD SAFE CART

const ShoppingCart = ({onToggle, isOpen}) => {

    const shoppingCartRef = useRef(null)

    const shoppingCart = useSelector(state => state.shoppingCart)

    console.log(shoppingCart)
    

    const toggleCart = (e) => {
        shoppingCartRef.current.classList.toggle("active")
    }

    const renderItems = () => {
        return shoppingCart.items.map((item, index) => {
            return (
                <li 
                    className = "shoppingItem"
                    key = {index}
                >
                    <div className = "pl-3 pr-3 d-flex justify-content-between w-100">
                        <span>{item.Name}</span>
                        <span>{item.Price}$</span>
                    </div>
                    <FontAwesomeIcon icon = "times-circle"/>
                </li>

            )
        })
    }

    return(
        <>
            <div 
                className = "shoppingCart" 
                ref = {shoppingCartRef}
            >
                <div 
                    className='s'
                    onClick = {e => {toggleCart(e)}}
                >
                    <FontAwesomeIcon icon = 'shopping-cart' />
                </div>
                <div className = "shoppingCartContent">
                    <h2>Shopping Cart</h2>
                    <ul className = "shoppingList">
                        {renderItems()}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart