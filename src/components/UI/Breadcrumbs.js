import React from 'react'
import {Link} from 'react-router-dom'
import fromEnToRu from "../../helpFunctions/fromEnToRu";

const Breadcrumbs = ({typeStuff, model, brand, stuff}) => {

    return(
        <div className = "breadcrumbsContainer">
            <ul id="breadcrumb">
                <li><Link to={`/production/${typeStuff}`}><span className="icon"> </span><span className = "bread-text">{fromEnToRu(stuff)}</span></Link></li>
                {brand ? <li><Link to = {`/production/${typeStuff}/${brand.replace("-","").toLowerCase()}`}><span className="icon"></span><span className = "bread-text">{brand}</span></Link></li> : null}
                {model ? <li><a href = {null}><span className="icon"></span><span className = "bread-text">{model.Name.substring(0, 20)} ...</span></a></li> : null}
            </ul>
        </div>
    )
}

export default Breadcrumbs