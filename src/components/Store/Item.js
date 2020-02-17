import React, {useState} from 'react'
import examplePhoto from '../../assets/images/production/cards/11.jpg'
import Button from '../../components/UI/Button'
import QuantityCounter from './QuantityCounter'
import { useDispatch } from 'react-redux'
import {addItem} from '../../redux/shoppingCart/shoppingCartAction'

const Item = ({itemStuff}) => {

    const dispatch = useDispatch()

    const [quantity, changeQuantity] = useState(1)

    const addToCart = (itemStuff, quantity) => {
        for ( let i = 0; i < quantity; i++){
            dispatch(addItem(itemStuff))
        }
        changeQuantity(1)
    }

    return(
        <div className = "d-flex flex-column" style = {{marginTop: '-10px'}}>
            <div className = "titleSearch" style = {{visibility: "hidden", opacity: 0}}>
                    {/* <input
                        //ref = {inputRef}
                        className = "filterItems"
                        type = "text" 
                        placeholder = "Type to filter"
                        //onInput = {() => {filterBrands()}}
                    />
                    <FontAwesomeIcon icon = "search" /> */}
            </div>
            <div className = "itemContainer row">
                <div className = "photoContainer col-5">
                    <img src = {examplePhoto} alt = "examplephoto"/>
                </div>
                <div className = "contentContainer col-7">
                    <h1 className = "item-title">{itemStuff.Name}</h1>
                    <div className = "infoContainer">
                        <h2 className="createdBy">created by <span className = "specialText">{itemStuff.Manufacturer}</span></h2>
                        <h2 className = "price"><span className = "specialText">{itemStuff.Price}$</span></h2>
                    </div>
                    <div className = "quantityBuyContainer row">
                        <div className = "d-flex align-items-center col-6">
                            <QuantityCounter 
                                quantity = {quantity}
                                changeQuantity = {changeQuantity}
                            />
                        </div>
                        <div className = "col-6">
                            <Button 
                                onClickAction = {() => {addToCart(itemStuff, quantity)}}
                            >Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Item