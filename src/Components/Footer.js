import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Input from "../Components/Input";

import classes from './Footer.module.css';

import Logo from '../Images/Logo.svg';
import linkedinLogo from '../Images/linkedin_logo.svg';
import instagramLogo from '../Images/instagram_logo.svg';

import { HashLink } from 'react-router-hash-link';

export default function Footer(){

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
                {/* <div className={classes.newsletter}>
                    <div>Newsletter abonnieren</div>
                    <div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"email"}
                                type = {"text"}
                                name = {"email"}
                                placeholder = {"E-Mail Adresse"}
                                // value={request.txt}
                                // handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                                // className={emailError.exists ? "is-invalid": ""}
                                // errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                // errorMsg = {emailError.helperText}
                            /> 
                        </div>
                    </div>
                    <div>
                        <p>
                            Erhalten Sie regelmäßig Impulse zu Resilienz, persönlicher Entwicklung 
                            und innovativen Lösungen für die Immobilienbranche – direkt in Ihr Postfach.
                        </p>
                    </div>

                </div> */}
                <div className={classes.footerLinks}>
                    <h4>Sitemap</h4>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Überschellenberg.immo' 
                            className={classes.FooterLink}
                        > 
                            Über schellenberg.immo 
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Coaches&Mentoren' 
                            className={classes.FooterLink}
                        > 
                            Coaches & Mentoren
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer} >
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Programme&Module' 
                            className={classes.FooterLink}
                        > 
                            Programme & Module
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Netzwerk' 
                            className={classes.FooterLink}
                        > 
                            Netzwerk
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Mitgliedschaften' 
                            className={classes.FooterLink}
                        > 
                            Mitgliedschaften
                        </HashLink>
                    </div>
                    <div className={classes.FooterLinkContainer}>
                        <HashLink
                            scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                            to='/#Kontakt' 
                            className={classes.FooterLink}
                        > 
                            Kontakt
                        </HashLink>
                    </div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                    <div className={classes.footerLinks}>
                        <h4>Rechtliche Hinweise</h4>
                        <div>
                        <Link
                                    to={`/Datenschutz-Impressum`}
                                    className={classes.FooterLink}
                                    
                                    onClick={() => {topFunction()}}
                                >
                                    Datenschutz/Impressum
                                </Link>
                        </div>
                    
                        {/* <div>AGB</div> */}
                    </div>
                    {/* <div className={classes.footerLinks}>
                        <h4>Sprache</h4>
                        <div>Deutsch</div>
                        <div>Englisch</div>
                    </div> */}
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
                <div style={{borderTop:'2px solid #e1e4ed'}}>schellenberg.immo GmbH 2024 ©</div>

            </section>
            </>
            :
            <>
            <section className={classes.footer}>
                <div className={classes.footerContent} >
                    <div className={classes.footerLinksAndForm}>
                        <div className={classes.footerLinks}>
                            <h4>Sitemap</h4>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Überschellenberg.immo' 
                                    className={classes.FooterLink}
                                > 
                                    Über schellenberg.immo 
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Coaches&Mentoren' 
                                    className={classes.FooterLink}
                                > 
                                    Coaches & Mentoren
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer} >
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Programme&Module' 
                                    className={classes.FooterLink}
                                > 
                                    Programme & Module
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Netzwerk' 
                                    className={classes.FooterLink}
                                > 
                                    Netzwerk
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Mitgliedschaften' 
                                    className={classes.FooterLink}
                                > 
                                    Mitgliedschaften
                                </HashLink>
                            </div>
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Kontakt' 
                                    className={classes.FooterLink}
                                > 
                                    Kontakt
                                </HashLink>
                            </div>
                        </div>
                        <div className={classes.footerLinks}>
                            <h4>Rechtliche Hinweise</h4>
                            <div>
                                <Link
                                    to={`/Datenschutz-Impressum`}
                                    className={classes.FooterLink}
                                    
                                    onClick={() => {topFunction()}}
                                >
                                    Datenschutz/Impressum
                                </Link>
                                
                            </div>
                           
                            {/* <div>AGB</div> */}
                        </div>
                        {/* <div className={classes.footerLinks}>
                            <h4>Sprache</h4>
                            <div>Deutsch</div>
                            <div>Englisch</div>
                        </div> */}
                        {/* <div className={classes.newsletter}>
                            <div>Newsletter abonnieren</div>
                            <div>
                                <div style={{marginBottom:'10px'}} >
                                    <Input 
                                        title = {"email"}
                                        type = {"text"}
                                        name = {"email"}
                                        placeholder = {"E-Mail Adresse"}
                                        // value={request.txt}
                                        // handleChange={handleChange}
                                        // handleBlur={userBlurHandler}
                                        // className={emailError.exists ? "is-invalid": ""}
                                        // errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                        // errorMsg = {emailError.helperText}
                                    /> 
                                </div>
                            </div>
                            <div>
                                <p>
                                    Erhalten Sie regelmäßig Impulse zu Resilienz, persönlicher Entwicklung 
                                    und innovativen Lösungen für die Immobilienbranche – direkt in Ihr Postfach.
                                </p>
                            </div>
                        </div> */}
                    </div>
                    <div className={classes.footerInfo}>
                        <div>
                            <img src={Logo} />
                        </div>
                        <div className={classes.trademark}>schellenberg.immo GmbH 2024 ©</div>
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