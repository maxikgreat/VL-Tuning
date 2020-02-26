import React from 'react'
import ShoppingCart from '../ShoppingCart'
import Navbar from '../Navbar';
import BackDrop from '../UI/BackDrop'
import {useSelector} from 'react-redux'

const Layout = ({children}) => {

    const shoppingCart = useSelector(state => state.shoppingCart)
    
    return(
        <>
            <Navbar />
            <ShoppingCart />
            {shoppingCart.isOpen ? <BackDrop /> : null}
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout