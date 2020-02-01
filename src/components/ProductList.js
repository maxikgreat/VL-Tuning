import React, {useState} from 'react'
import {useParams} from 'react-router'
import Product from './Product'


const ProductList = ({brand, model, stuff}) => {

    const {typeStuff} = useParams()

    const [example, setExample] = useState([1,2,3,4,5,6,7,8,9,10])

    const renderItems = () => {
        return example.map((item, index) => (
            <div className = "col-4 productCard">
                <Product index = {index} />
            </div>
        ))
    }
    console.log(typeStuff)

    return(
        
        <div className = "productlistContainer">
            <div className = "row">
                {renderItems()}
            </div>
        </div>
    )
}

export default ProductList