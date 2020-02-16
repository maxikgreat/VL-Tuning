import React from 'react'

const Item = ({itemStuff}) => {
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
            <div className = "itemContainer">
                <h1>Name: {itemStuff.Name}</h1>
                <h2>Price: {itemStuff.Price}</h2>
            </div>  
        </div>
    )
}

export default Item