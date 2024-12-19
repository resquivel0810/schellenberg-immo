import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Input from "../Components/Input";

import classes from './Footer.module.css';

import Logo from '../Images/Logo.svg';
import linkedinLogo from '../Images/linkedin_logo.svg';
import instagramLogo from '../Images/instagram_logo.svg';

import { HashLink } from 'react-router-hash-link';

export default function Footer(){

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
                    <div>Über schellenberg.immo</div>
                    <div>Programme und Module</div>
                    <div>Testimonials</div>
                    <div>Kontakt</div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                    <div className={classes.footerLinks}>
                        <h4>Rechtliche Hinweise</h4>
                        <div>Datenschutz</div>
                        <div>Impressum</div>
                        <div>AGB</div>
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
                    <a href="https://www.linkedin.com/in/philipp-schellenberg-80811a6a/">
                        <img src={linkedinLogo} />
                    </a>
                    <a href="">
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
                            {/* <div>Über schellenberg.immo</div> */}
                            <div className={classes.FooterLinkContainer}>
                                <HashLink
                                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                                    to='/#Überschellenberg.immo' 
                                    className={classes.FooterLink}
                                > 
                                    Über schellenberg.immo 
                                </HashLink>
                            </div>
                            
                            <div>Programme und Module</div>
                            <div>Testimonials</div>
                            <div>Kontakt</div>
                        </div>
                        <div className={classes.footerLinks}>
                            <h4>Rechtliche Hinweise</h4>
                            <div>Datenschutz</div>
                            <div>Impressum</div>
                            <div>AGB</div>
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
                            <a href="https://www.linkedin.com/in/philipp-schellenberg-80811a6a/">
                                <img src={linkedinLogo} />
                            </a>
                            <a href="">
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