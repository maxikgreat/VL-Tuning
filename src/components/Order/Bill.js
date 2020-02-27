import React from 'react'

const Bill = ({items, total, quantity}) => {
    

    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <li 
                    key = {index}
                    className = "billItem"
                >
                    <span className = "bill bill-name">{item.Name}</span>
                    <span className = "bill bill-manufacturer">{item.Manufacturer}</span>
                    <span className = "bill bill-quantity">{item.Quantity}</span>
                    <span className = "bill bill-price">{item.Price}$</span>
                </li>
            )
        })
    }


    return(
        <div className = "wrapperPadding">
            <h2 className = "billTitle">Your order</h2>
            <ul className = "billItemsContainer">
                {renderItems()}
            </ul>
            <hr />
            <div className = "summaryContainer">
                <span className = "red-text">Quantity: <span className = "specialText">{quantity}</span></span>
                <span className = "red-text">Total: <span className = "specialText">{total}</span></span>
            </div>
        </div>
        
    )
}

export default Bill