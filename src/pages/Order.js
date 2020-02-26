import React from 'react'
import Bill from '../components/Order/Bill'
import EndForm from '../components/Order/EndForm'
import bgImgOrder from '../assets/images/order/orderBg1.jpg'
import {useSelector} from 'react-redux'

const Order = () => {

    const shoppingCart = useSelector(state => state.shoppingCart)

    const {items, total, quantity} = shoppingCart

    const backgroundStyles = {
        backgroundImage: `url(${bgImgOrder})`
    }

    return(
        <section className = "order" style = {backgroundStyles}>
            <div className = "row h-100" style={{background: 'rgba(0,0,0,0.7)'}}>
                <div className = "billContainer col-6">
                    <Bill 
                        items = {items}
                        total = {total}
                        quantity = {quantity}
                    />
                </div>
                <div className = "formContainer col-6">
                    <EndForm />
                </div>
            </div>
        </section>
    )
}

export default Order