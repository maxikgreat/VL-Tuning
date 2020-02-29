import React from 'react'

const Bill = ({items, total, quantity}) => {
    

    const renderItems = () => {
        let showType = ""
        return items.map((item, index) => {
            switch(item.Type){
                case "Main":
                    showType = "дефлектор окон"
                    break
                case "Chrome":
                    showType = "дефлектор окон (хром)"
                    break
                case "Hood":
                    showType = "деф. капота"
                    break
                case "Back":
                    showType = "спойлер заднего стекла"
                    break
                default:
                    break
            }
            return (
                <li 
                    key = {index}
                    className = "billItem"
                >
                    <div classNmae = "bill bill-info-name">
                        <span className = "bill bill-name">{item.Name}<br /></span>
                        <span className = "bill bill-type">{showType} | </span>
                        <span className = "bill bill-manufacturer">{item.Manufacturer}</span>
                    </div>
                    
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