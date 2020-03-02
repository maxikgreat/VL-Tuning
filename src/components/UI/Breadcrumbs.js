import React from 'react'
import {Link} from 'react-router-dom'
import fromEnToRu from "../../helpFunctions/fromEnToRu";

const Breadcrumbs = ({typeStuff, model, brand, stuff}) => {

    return(
        <div className = "breadcrumbsContainer">
            <ul id="breadcrumb">
                <li><Link to={`/production/${typeStuff}`}><span className="icon"> </span>{fromEnToRu(stuff)}</Link></li>
                {brand ? <li><Link to = {`/production/${typeStuff}/${brand.replace("-","").toLowerCase()}`}><span className="icon"></span>{brand}</Link></li> : null}
                {model ? <li><a href = {null}><span className="icon"></span>{model.Name.substring(0, 20)} ...</a></li> : null}
            </ul>
        </div>
    )
}

export default Breadcrumbs