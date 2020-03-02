import React, {useRef} from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch} from 'react-redux'
import {setStuff, clearAll} from '../redux/choseStuff/choseStuffAction'
import logoVlTun from '../assets/images/vl-tunLogo.png'


const Navbar = () => {

    const subMenu = useRef()

    const dispatch = useDispatch()

    return(
        <header>
                <nav className="navbar navbar-expand-lg p-0">
                    <div className = "col-1">
                    </div>
                    <div className = "col-10">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact={true} className = "nav-link" to = '/' alt = "Home">Старт</NavLink>
                            </li>
                            <li className = "nav-item" 
                                onMouseOver = {() => {
                                    subMenu.current.classList.add("show")
                                }}
                                onMouseLeave = {() => {
                                    subMenu.current.classList.remove("show")
                                }}
                            >
                                {/*  eslint-disable-next-line */}
                                <a className="nav-link" to="#" alt = "Store">Магазин
                                    <FontAwesomeIcon icon = "chevron-down"/>
                                </a>
                                <div className = "sub-menu-container" ref = {subMenu}>
                                    <ul className = "sub-menu">
                                        <li className = "nav-item" onClick = {() => {
                                            dispatch(clearAll())
                                            dispatch(setStuff("Ветровики"))
                                        }}>
                                            <NavLink className= "nav-link" to="/production/door-visors">Ветровики</NavLink>   
                                        </li>
                                        <li className = "nav-item" onClick = {() => {
                                            dispatch(clearAll())
                                            dispatch(setStuff("Ветровики Хром"))
                                        }}>
                                            <NavLink className= "nav-link" to="/production/door-visors-chrome">Ветр. Хром</NavLink>   
                                        </li>
                                        <li className = "nav-item" onClick = {() => {
                                            dispatch(clearAll())
                                            dispatch(setStuff("Мухобойки"))
                                        }}>
                                            <NavLink className= "nav-link" to="/production/hood-protectors">Мухобойки</NavLink>   
                                        </li>
                                        <li className = "nav-item" onClick = {() => {
                                            dispatch(clearAll())
                                            dispatch(setStuff("Спойлера"))
                                        }}>
                                            <NavLink className= "nav-link" to="/production/back-spoilers">Спойлера</NavLink>   
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="navbar-brand" to="/">
                                <img src = {logoVlTun} alt = "logo"/>
                            </li>
                            <li className="nav-item">
                                <NavLink className = "nav-link" to = '/quick-search' alt = "Search">Найти товар</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-us" alt = "About Us">О нас</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div  className = "col-1">

                    </div>
                </nav>
        </header>
    )
}

export default Navbar