import React from 'react'

const Bill = ({items, total, quantity}) => {
    

    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <li 
                    key = {index}
                    className = "billItem"
                >
                    <span class = "bill-name">{item.Name}</span>
                    <span class = "bill-manufacturer">{item.Manufacturer}</span>
                    <span class = "bill-quantity">{item.Quantity}</span>
                    <span class = "bill-price">{item.Price}$</span>
                </li>
            )
        })
    }


    return(
        <>
            <h2 className = "billTitle">Your order</h2>
            <ul className = "billItemsContainer">
                {renderItems()}
            </ul>
            <hr />
            <div className = "summaryContainer">
                <span className = "red-text">Quantity: <span className = "specialText">{quantity}</span></span>
                <span className = "red-text">Total: <span className = "specialText">{total}</span></span>
            </div>
        </>
        
    )
}

export default Bill