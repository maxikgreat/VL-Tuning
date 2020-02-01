import React from 'react'

const Breadcrumbs = ({brand, model, stuff}) => {
    return(
        <ul id="breadcrumb">
            <li><a href="#"><span className="icon"> </span>{brand}</a></li>
            <li><a href="#"><span className="icon"> </span>{model}</a></li>
            <li><a href="#"><span className="icon"> </span>{stuff}</a></li>
        </ul>

    )
}

export default Breadcrumbs