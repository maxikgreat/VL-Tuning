import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearModel } from '../../redux/choseStuff/choseStuffAction'

const Breadcrumbs = ({typeStuff, model,  brand, stuff}) => {

    const history = useHistory()

    return(
        <div className = "breadcrumbsContainer">
            <ul id="breadcrumb">
                <li><Link to={`/production/${typeStuff}`}><span className="icon"> </span>{stuff}</Link></li>
                {brand ? <li><a href = {null} onClick = {model ? () => {history.goBack()} : null}><span className="icon"></span>{brand}</a></li> : null}
                {model ? <li><a href = {null}><span className="icon"></span>{model.Name.substring(0, 20)} ...</a></li> : null}
            </ul>
        </div>
    )
}

export default Breadcrumbs