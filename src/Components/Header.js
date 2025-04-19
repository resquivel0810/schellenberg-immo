import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import LogoHeader from '../Images/Logo_main.png';
import LogoHeaderSmall from '../Images/Logo_responsive.svg'

import classes from './Header.module.css'

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header(props){

    const [sectionNames, setSectionNames] = useState([])
    const [currentPage, setCurrentPage] = useState()
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [menu_class, setMenuClass] = useState("menu hidden")

    useEffect(() => {
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/sectionpage-name?acf_format=standard&_fields=id,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                let namesList = []
                data.toReversed().map(s => namesList.push(s.acf.sectionpage))
                setSectionNames(namesList)
            })
    }, [])

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

    function scrollToTargetAdjusted(targetElement, offset){
        var element = document.getElementById(targetElement);
        var headerOffset = offset;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }



    return(
        <header className={classes.Header}>
            <div className={classes.Content}>
            <div className={classes.ImageContainer}>
                <Link onClick={() => {
                    if(location.pathname === '/'){
                        scrollToTargetAdjusted("hero", 100); 
                    }
                    setNavbarOpen(false)
                }} 
                    to={`/`}>
                    <img className={classes.Logo} src={ window.innerWidth < 991 ? LogoHeaderSmall :LogoHeader } alt="HeaderLogo" />
                </Link>
                
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
                    <HashLink
                        scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                        to='/#Überschellenberg.immo' 
                        className={classes.HeaderLink}
                        // style={{color:location.hash === "#Überschellenberg.immo"?'white' : 'white'}}
                        onClick={() => setNavbarOpen(false)}
                    > 
                        {sectionNames[0]}
                    </HashLink>
                    <HashLink
                        scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                        to='/#Coaches&Mentoren' 
                        className={classes.HeaderLink}
                        // style={{color:location.hash === "#Coaches&Mentoren"?'white' : 'white'}}
                        onClick={() => setNavbarOpen(false)}
                    > 
                        {sectionNames[1]}
                    </HashLink>
                    <HashLink
                        scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                        to='/#Programme&Module' 
                        className={classes.HeaderLink}
                        // style={{color:location.hash === "#Programme&Module"?'white' : 'white'}}
                        onClick={() => setNavbarOpen(false)}
                    > 
                        {sectionNames[2]}
                    </HashLink>
                    <HashLink
                        scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                        to='/#Netzwerk' 
                        className={classes.HeaderLink}
                        // style={{color:location.hash === "#Netzwerk"?'white' : 'white'}}
                        onClick={() => setNavbarOpen(false)}
                    > 
                        {sectionNames[3]}
                    </HashLink>
                    <HashLink
                        scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                        to='/#Mitgliedschaften' 
                        className={classes.HeaderLink}
                        // style={{color:location.hash === "#Mitgliedschaften"?'white' : 'white'}}
                        onClick={() => setNavbarOpen(false)}
                    > 
                        {sectionNames[4]}
                    </HashLink>
                    <HashLink
                        scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                        to='/#Kontakt' 
                        className={classes.HeaderLink}
                        // style={{color:location.hash === "#Kontakt"?'white' : 'white'}}
                        onClick={() => setNavbarOpen(false)}
                    > 
                        {sectionNames[5]}
                    </HashLink>
                </div>
            </div>
            </div>
            
        
        </header>
    )
}