import React from 'react'

const Breadcrumbs = ({brand, model, stuff}) => {

    return(
        <div className = "breadcrumbsContainer">
            <ul id="breadcrumb">
                <li><a href="#"><span className="icon"> </span>{stuff}</a></li>
                {brand ? <li><a href="#"><span className="icon"> </span>{brand}</a></li> : null}
                {model ? <li><a href="#"><span className="icon"> </span>{model}</a></li> : null}
            </ul>
        </div>
    )
}

export default Breadcrumbs