import React from 'react'
import Modal from '../UI/Modal'
import ShoppingCart from '../ShoppingCart'
import Navbar from '../Navbar';
import BackDrop from '../UI/BackDrop'
import {useSelector} from 'react-redux'

const Layout = ({children}) => {

    const shoppingCart = useSelector(state => state.shoppingCart)
    const modal = useSelector(state => state.modal)
    
    return(
        <>
            {modal.isOpen ? <Modal /> : null}
            <ShoppingCart />
            <Navbar />
            {shoppingCart.isOpen ? <BackDrop /> : null}
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout