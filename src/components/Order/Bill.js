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
                <div key={index}>
                    <li
                        className = "billItem"
                    >
                        <div className = "bill bill-info-name">
                            <span className = "bill bill-name">{item.Name}<br /></span>
                            <span className = "bill bill-type">{showType} | </span>
                            <span className = "bill bill-manufacturer">{item.Manufacturer}</span>
                        </div>

                        <span className = "bill bill-quantity">{item.Quantity} шт</span>
                        <span className = "bill bill-price">{item.Price}</span>
                    </li>
                    <hr />
                </div>
            )
        })
    }


    return(
        <div className = "wrapperPadding">
            <h2 className = "title">Ваш заказ</h2>
            <ul className = "billItemsContainer">
                {renderItems()}
            </ul>
            <hr />
            <div className = "summaryContainer">
                <span className = "red-text">Кол-во: <span className = "specialText">{quantity} шт</span></span>
                <span className = "red-text">В сумме: <span className = "specialText">{total} грн</span></span>
            </div>
        </div>
        
    )
}

export default Bill