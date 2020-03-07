import React, {useRef} from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch} from 'react-redux'
import {setStuff, clearAll} from '../redux/choseStuff/choseStuffAction'


const MobileNav = () => {

    const subMenu = useRef()

    const togglerSubMenu = useRef()

    const menu = useRef()

    const hamb = useRef()


    // useEffect(() => {
    //     menu.current.classList.toggle("active")
    // }, [menu.current.classList])



    const toggleMenu = () => {
        menu.current.classList.toggle("active")
        hamb.current.classList.toggle("activeHam")
    }

    const toggleSubMenu = () => {
        subMenu.current.classList.toggle("show")
        togglerSubMenu.current.classList.toggle("activeSub")
    }

    const dispatch = useDispatch()

    return(
            <nav className="mobileNavbar">
                <div
                    className = "hamburger"
                    onClick = {() => {toggleMenu()}}
                    ref = {hamb}
                >
                    <div className = "hamb-cont">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <span>меню</span>
                </div>

                    <ul className = "mobile-nav-content" ref = {menu}>
                        <li className="nav-item">
                            <NavLink
                                exact={true}
                                className = "nav-link"
                                to = '/'
                                alt = "Home"
                                onClick = {() => {toggleMenu()}}
                            >Старт</NavLink>
                        </li>
                        <li className = "nav-item"
                            ref = {togglerSubMenu}
                            onClick = {() => {toggleSubMenu()}}
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
                                        <NavLink
                                            className= "nav-link"
                                            to="/production/door-visors"
                                            onClick = {() => {toggleMenu()}}
                                        >Ветровики</NavLink>
                                    </li>
                                    <li className = "nav-item" onClick = {() => {
                                        dispatch(clearAll())
                                        dispatch(setStuff("Ветровики Хром"))
                                    }}>
                                        <NavLink
                                            className= "nav-link"
                                            to="/production/door-visors-chrome"
                                            onClick = {() => {toggleMenu()}}
                                        >Ветр. Хром</NavLink>
                                    </li>
                                    <li className = "nav-item" onClick = {() => {
                                        dispatch(clearAll())
                                        dispatch(setStuff("Мухобойки"))
                                    }}>
                                        <NavLink
                                            className= "nav-link"
                                            to="/production/hood-protectors"
                                            onClick = {() => {toggleMenu()}}
                                        >Мухобойки</NavLink>
                                    </li>
                                    <li className = "nav-item" onClick = {() => {
                                        dispatch(clearAll())
                                        dispatch(setStuff("Спойлера"))
                                    }}>
                                        <NavLink
                                            className= "nav-link"
                                            to="/production/back-spoilers"
                                            onClick = {() => {toggleMenu()}}
                                        >Спойлера</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className = "nav-link"
                                to = '/quick-search'
                                alt = "Search"
                                onClick = {() => toggleMenu()}
                            >Найти товар</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about-us"
                                alt = "About Us"
                                onClick = {() => toggleMenu()}
                            >О нас</NavLink>
                        </li>
                    </ul>
            </nav>
    )
}

export default MobileNav