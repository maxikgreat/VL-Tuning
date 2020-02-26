import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import {deleteItem} from '../redux/shoppingCart/shoppingCartAction'
import Button from '../components/UI/Button'
import {useHistory} from 'react-router-dom'
import {toggleCart} from '../redux/shoppingCart/shoppingCartAction'

const ShoppingCart = () => {

    const shoppingCartRef = useRef(null)

    const shoppingCart = useSelector(state => state.shoppingCart)

    const dispatch = useDispatch()

    const history = useHistory()

    const deleteFromCart = (e) => {
        let itemToDelete = shoppingCart.items.find(item => item.ID === e.target.getAttribute('data-item-delete-id'))
        dispatch(deleteItem(itemToDelete))
    }

    const renderItems = () => {
        if(shoppingCart.items.length > 0){
            return shoppingCart.items.map((item, index) => {
                return (
                        <li 
                            className = "shoppingItem"
                            key = {index}
                        >
                            <span className = "name">{item.Name}</span>
                            <div className = "quantPriceIcon">
                                <span className = "quant">{item.Quantity}</span>
                                <span className = "price">{item.Price * item.Quantity}$</span>
                                <FontAwesomeIcon 
                                    data-item-delete-id = {item.ID}
                                    icon = "times-circle"
                                    onClick = {(e) => {deleteFromCart(e)}}
                                />
                            </div>
                        </li>
                )
            })
        } else {
            return <span className = "empty">Your cart is empty now</span>
        }
    }

    return(
        <>
            <div 
                className = {shoppingCart.isOpen ? 'shoppingCart active' : 'shoppingCart'} 
                ref = {shoppingCartRef}
            >
                <div 
                    className='s'
                    onClick = {() => {dispatch(toggleCart())}}
                >
                    <span 
                        className = "quantityIn" 
                        style = {{padding: shoppingCart.quantity ? '3px' : '0'}}
                    >{shoppingCart.quantity > 0 ? shoppingCart.quantity : null}</span>

                    <FontAwesomeIcon icon = 'shopping-cart' />
                </div>
                <div className = "shoppingCartContent">
                    <h2>Shopping Cart</h2>
                    <hr />
                    <ul className = "shoppingList">
                        {renderItems()}
                    </ul>
                    {shoppingCart.items.length > 0 ? 
                        <>
                            <hr />
                            <div className = "orderContainer">
                                <div className = "orderButtonContainer">
                                    <Button 
                                        onClickAction = {() => history.push('/order')}
                                    >Order</Button>
                                </div>
                                <div className = "quantPriceIcon">
                                    <span className = "quant">{shoppingCart.quantity}</span>
                                    <span className = "price">{shoppingCart.total}
                                        <FontAwesomeIcon 
                                            icon = "money-bill-alt"
                                            style = {{marginLeft: '10px', paddingTop: '4px'}}
                                        />
                                    </span>
                                </div>
                            </div>
                        </>
                    : null}
                </div>
            </div>
        </>
    )
}

export default ShoppingCart