import React, {useRef} from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShoppingCart from './ShoppingCart'
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
                                <NavLink className = "nav-link" to = '/' alt = "Home">Home</NavLink>
                            </li>
                            <li className = "nav-item" 
                                onMouseOver = {() => {
                                    subMenu.current.classList.toggle("show")
                                    setTimeout(() => {
                                        subMenu.current.classList.toggle("show")
                                    }, 1500)
                                }}
                            >
                                {/*  eslint-disable-next-line */}
                                <a className="nav-link" to="#" alt = "Store">Store
                                    <FontAwesomeIcon icon = "chevron-down"/>
                                </a>
                            </li>
                            <li className="navbar-brand" to="/">
                                <img src = {logoVlTun} alt = "logo"/>
                            </li>
                            <li className="nav-item">
                                <NavLink className = "nav-link" to = '/quick-search' alt = "Search">Quick Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about-us" alt = "About Us">About</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div  className = "col-1">
                        <ShoppingCart />
                    </div>
                </nav>
                <div className = "sub-menu-container w-100" ref = {subMenu}>
                    <ul className = "sub-menu d-flex">
                        <li className = "nav-item" onClick = {() => {
                            dispatch(clearAll())
                            dispatch(setStuff("Ветровики"))
                        }}>
                            <NavLink className= "nav-link" to="/production/door-visors">Ветровики</NavLink>   
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
                        <li className = "nav-item" onClick = {() => {
                            dispatch(clearAll())
                            dispatch(setStuff("Реснички"))
                        }}>
                            <NavLink className= "nav-link" to="/production/headlight-visors">Реснички</NavLink>   
                        </li>
                    </ul>
                </div>
        </header>
    )
}

export default Navbar