import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

import Logo from '../Images/Logo.svg';
import linkedinLogo from '../Images/linkedin_logo.svg';
import instagramLogo from '../Images/instagram_logo.svg';

import { HashLink } from 'react-router-hash-link';

export default function Footer(){
    const [footerContent, setFooterContent] = useState([])
    const [sectionNames, setSectionNames] = useState([])
    
    useEffect(() => {
        document.getElementById("year").innerHTML = new Date().getFullYear()

        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/sectionpage-name?acf_format=standard&_fields=id,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                let namesList = []
                data.toReversed().map(s => namesList.push(s.acf.sectionpage))
                setSectionNames(namesList)
            })
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/posts/240?acf_format=standard&_fields=id,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
 
                setFooterContent(data.acf)
            })
    }, [])


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
        <>
        {
            window.innerWidth < 991 
            ?
            <>
            <section className={classes.footer}>
            
                <div className={classes.footerLinks}>
                    <h4>{footerContent.home_page_nav_title}</h4>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Überschellenberg.immo' 
                            className={classes.FooterLink}
                        > 
                            {sectionNames[0]}
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Coaches&Mentoren' 
                            className={classes.FooterLink}
                        > 
                            {sectionNames[1]}
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer} >
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Programme&Module' 
                            className={classes.FooterLink}
                        > 
                            {sectionNames[2]}
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Netzwerk' 
                            className={classes.FooterLink}
                        > 
                            {sectionNames[3]}
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Mitgliedschaften' 
                            className={classes.FooterLink}
                        > 
                            {sectionNames[4]}
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Kontakt' 
                            className={classes.FooterLink}
                        > 
                            {sectionNames[5]}
                        </HashLink>
                    </div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                    <div className={classes.footerLinks}>
                        <h4>{footerContent.pages_nav_title}</h4>
                        <div>
                        <Link
                                    to={`/Datenschutz-Impressum`}
                                    className={classes.FooterLink}
                                    
                                    onClick={() => {topFunction()}}
                                >
                                    {footerContent.impressum_link}
                                </Link>
                        </div>
                    
                    </div>
              
                </div>
                <div>
                    <img src={Logo} />
                </div>
                <div style={{display:"flex", justifyContent:'center'}}>
                    <a href="https://www.linkedin.com/company/schellenberg-immo-gmbh/?viewAsMember=true">
                        <img src={linkedinLogo} />
                    </a>
                    <a href="https://www.instagram.com/schellenberg_immo/">
                        <img src={instagramLogo} />
                    </a>
                </div>
                <div style={{borderTop:'2px solid #e1e4ed'}}>{footerContent.copyright_text}  <span id="year"></span> ©</div>

            </section>
            </>
            :
            <>
            <section className={classes.footer}>
                <div className={classes.footerContent} >
                    <div className={classes.footerLinksAndForm}>
                        <div className={classes.footerLinks}>
                            <h4>{footerContent.home_page_nav_title}</h4>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Überschellenberg.immo' 
                                    className={classes.FooterLink}
                                > 
                                    {sectionNames[0]}
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Coaches&Mentoren' 
                                    className={classes.FooterLink}
                                > 
                                    {sectionNames[1]}
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer} >
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Programme&Module' 
                                    className={classes.FooterLink}
                                > 
                                    {sectionNames[2]}
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Netzwerk' 
                                    className={classes.FooterLink}
                                > 
                                    {sectionNames[3]}
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Mitgliedschaften' 
                                    className={classes.FooterLink}
                                > 
                                    {sectionNames[4]}
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Kontakt' 
                                    className={classes.FooterLink}
                                > 
                                    {sectionNames[5]}
                                </HashLink>
                            </div>
                        </div>
                        <div className={classes.footerLinks}>
                            <h4>{footerContent.pages_nav_title}</h4>
                            <div>
                                <Link
                                    to={`/Datenschutz-Impressum`}
                                    className={classes.FooterLink}
                                    
                                    onClick={() => {topFunction()}}
                                >
                                    {footerContent.impressum_link}
                                </Link>
                                
                            </div>
             
                        </div>
                        
                    </div>
                    <div className={classes.footerInfo}>
                        <div>
                            <img src={Logo} />
                        </div>
                        <div className={classes.trademark}>{footerContent.copyright_text}<span id="year"></span> ©</div>
                        <div>
                            <a href="https://www.linkedin.com/company/schellenberg-immo-gmbh/?viewAsMember=true">
                                <img src={linkedinLogo} />
                            </a>
                            <a href="https://www.instagram.com/schellenberg_immo/">
                                <img src={instagramLogo} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            </>
        }
 
        </>
    )
}