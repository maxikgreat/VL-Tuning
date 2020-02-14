import React from 'react'
import {Link} from 'react-router-dom'

const Breadcrumbs = ({typeStuff, brand, stuff}) => {



    return(
        <div className = "breadcrumbsContainer">
            <ul id="breadcrumb">
                <li><Link to={`/production/${typeStuff}`}><span className="icon"> </span>{stuff}</Link></li>
                {brand ? <li><Link><span className="icon"> </span>{brand}</Link></li> : null}
            </ul>
        </div>
    )
}

export default Breadcrumbs