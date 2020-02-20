import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearModel } from '../../redux/choseStuff/choseStuffAction'

const Breadcrumbs = ({typeStuff, model, brand, stuff}) => {

    const history = useHistory()

    return(
        <div className = "breadcrumbsContainer">
            <ul id="breadcrumb">
                <li><Link to={`/production/${typeStuff}`}><span className="icon"> </span>{stuff}</Link></li>
                {brand ? <li><Link to = {`/production/${typeStuff}/${brand.replace("-","").toLowerCase()}`}><span className="icon"></span>{brand}</Link></li> : null}
                {model ? <li><a href = {null}><span className="icon"></span>{model.Name.substring(0, 20)} ...</a></li> : null}
            </ul>
        </div>
    )
}

export default Breadcrumbs