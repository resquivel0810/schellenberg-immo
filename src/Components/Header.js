import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import LogoHeader from '../Images/logo.png';

import classes from './Header.module.css'

import { Link } from 'react-router-dom';

export default function Header(){

    const [currentPage, setCurrentPage] = useState()
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [menu_class, setMenuClass] = useState("menu hidden")

    let location = useLocation();

    const updateMenu = () => {
        if(!navbarOpen) {
            
            setMenuClass("visible")
            
        }
        else {
            
            setMenuClass("hidden")
        }
        setNavbarOpen(!navbarOpen)
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        <header className={classes.Header}>
            <div className={classes.Content}>
            <div className={classes.ImageContainer}>
                {/* <Link to={`/`}> */}
                    <img style={{width:'350px', objectFit:'contain', backgroundColor:'white'}} src={LogoHeader } alt="HeaderLogo" />
                {/* </Link> */}
                
            </div>
            {
                window.innerWidth < 991
                ?
                    <div onClick={updateMenu} className={classes.burgerButton}>
                        <div className={classes.bar}></div>
                        <div className={classes.bar}></div>
                        <div className={classes.bar}></div>
                    </div>
                :
                null
            }
            <div className={`${classes.LinksContainer} ${navbarOpen ? classes.visible: classes.hidden}` }>
                <div className={classes.Links} >
                    <Link
                        to={`/`}
                        className={classes.HeaderLink}
                        style={{color:location.pathname === "/"?'#6d758f' : '#6d758f', fontWeight:location.pathname === "/"?'bold' : 'normal'}}
                        onClick={() => {topFunction()}}
                    >
                        Über schellenberg.immo
                    </Link>
                    <Link
                        to={`/`}
                        className={classes.HeaderLink}
                        style={{color:location.pathname === "/nosotros"?'#6d758f' : '#6d758f', fontWeight:location.pathname === "/nosotros"?'bold' : 'normal'}}
                        onClick={() => {topFunction()}}
                    >
                        Programme und Module
                    </Link>
                    <Link
                        to={`/`}
                        className={classes.HeaderLink}
                        style={{color:location.pathname === "/tienda"?'#6d758f' : '#6d758f', fontWeight:location.pathname === "/tienda"?'bold' : 'normal'}}
                        onClick={() => {topFunction()}}
                    >
                        Testimonials
                    </Link>
                    <Link
                        to={`/`}
                        className={classes.HeaderLink}
                        style={{color:location.pathname === "/mayoreo"?'#6d758f' : '#6d758f', fontWeight:location.pathname === "/mayoreo"?'bold' : 'normal'}}
                        onClick={() => {topFunction()}}
                    >
                        Kontakt
                    </Link>
                </div>
            </div>
            </div>
            
        
        </header>
    )
}