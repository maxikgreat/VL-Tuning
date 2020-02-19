import React, {useState} from 'react'
import examplePhoto from '../../assets/images/production/cards/11.jpg'
import Button from '../../components/UI/Button'
import QuantityCounter from './QuantityCounter'
import { useDispatch} from 'react-redux'
import {addNewItem, addExistItem} from '../../redux/shoppingCart/shoppingCartAction'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Item = ({cartItems, itemStuff}) => {

    //redux
    const dispatch = useDispatch()

    const [quantity, changeQuantity] = useState(1)

    const addToCart = () => {

        const localItem = {...itemStuff}

        cartItems.some((item, index) => {
            if(localItem.ID !== item.ID){
                console.log(index + ".ITEM  " + item.ID + " NOT IDENTITY TO " + localItem.ID)
            }
            else{
                console.log(index + ".ITEM  " + item.ID + " IDENTITY TO " + localItem.ID)
            }
        })


        //console.log(cartItems.some(item => item.ID !== localItem.ID) || cartItems.length <= 0)




        localItem.Quantity = quantity
        if(cartItems.some(item => item.ID !== localItem.ID) || cartItems.length <= 0){
            dispatch(addNewItem(localItem))
        } else {
            dispatch(addExistItem(cartItems, localItem))
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
                            <h2 className="createdBy">created by <span className = "specialText">{itemStuff.Manufacturer}</span></h2>
                            <h2 className = "price"><span className = "specialText">{itemStuff.Price}$</span></h2>
                        </div>
                    </div>
                    <div className = "advIconsContainer row">
                        <div className = "advIcon col-4">
                            <FontAwesomeIcon icon = "car" />
                            <span>on favourite car</span>
                        </div>
                        <div className = "advIcon col-4">
                            <FontAwesomeIcon icon = 'cloud-sun' />
                            <span>weather - no matter</span>
                        </div>
                        <div className = "advIcon col-4">
                            <FontAwesomeIcon icon = "bolt" />
                            <span>strong and light</span>
                        </div>
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
                                onClickAction = {() => {addToCart()}}
                            >Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Item