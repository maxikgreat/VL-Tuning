import React, {useState} from 'react'
import examplePhoto from '../../assets/images/production/cards/item.png'
import Button from '../../components/UI/Button'
import AdvantageIcons from './AdvantagesIcons'
import QuantityCounter from './QuantityCounter'
import { useDispatch} from 'react-redux'
import {addNewItem, addExistItem} from '../../redux/shoppingCart/shoppingCartAction'

const Item = ({cartItems, itemStuff}) => {

    //redux
    const dispatch = useDispatch()

    const [quantity, changeQuantity] = useState(1)

    const addToCart = () => {

        const localItem = {...itemStuff}

        localItem.Quantity = quantity
        if(cartItems.some(item => item.ID === localItem.ID)){
            dispatch(addExistItem(cartItems, localItem))
        } else {
            dispatch(addNewItem(localItem))
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
                    <div>
                        <h1 className = "item-title" title = {itemStuff.Name}>{itemStuff.Name}</h1>
                        <div className = "infoContainer">
                            <h2 className="createdBy">Изготовитель <span>{itemStuff.Manufacturer}</span></h2>
                            <h2 className = "price"><span>{itemStuff.Price} грн.</span></h2>
                        </div>
                    </div>
                    <AdvantageIcons />
                    <div className = "quantityBuyContainer row">
                        <div className = "d-flex align-items-center col-6">
                            <QuantityCounter 
                                quantity = {quantity}
                                changeQuantity = {changeQuantity}
                            />
                        </div>
                        <div className = "col-6 d-flex justify-content-center">
                            <Button 
                                onClickAction = {() => {addToCart()}}
                            >Добавить в корзину</Button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Item