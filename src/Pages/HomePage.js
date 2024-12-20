import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { HashLink } from 'react-router-hash-link';
import Header from "../Components/Header";
import Calendar from "../Components/Calendar";
import FeedbackCarousel from "../Components/FeedbackCarousel";
import GoogleMap from "../Components/GoogleMap";
import Input from "../Components/Input";
import TextArea from "../Components/Textarea";
import Footer from "../Components/Footer";

import classes from './HomePage.module.css';
import dummy from '../Images/empty.svg';

import logo1 from '../Images/stock_logo.svg';
import logo2 from '../Images/svit_logo.svg';
import logo3 from '../Images/svit_s_logo.svg';
import logo4 from '../Images/athletes_network.png';
import logo4s from '../Images/athletes_network_s.png';
import logo5 from '../Images/dropbox.svg';
import logo6 from '../Images/hubspot.svg';
import logo7 from '../Images/framer.svg';
import logo8 from '../Images/slack.svg';

import instagramLogo from '../Images/instagram_logo.svg';
import instagramLogoDark from '../Images/Instagram_logo_dark.svg';
import facebookLogo from '../Images/facebook_logo.svg';
import facebookLogoDark from '../Images/facebook_logo_dark.svg';
import xLogo from '../Images/x_logo.svg';
import xLogoDark from '../Images/x_logo_dark.svg';


import banner from "../Videos/banner.mp4";
import bannerResponsive from '../Videos/banner_responsive.mp4';

import pAndMImg1 from '../Images/p&mImg1.png';
import pAndMImg2 from '../Images/p&mImg2.png';
import pAndMImg3 from '../Images/p&mImg3.png';

import mailLogo from '../Images/mail_logo.svg';
import telephoneLogo from '../Images/telephone_logo.svg';
import locationLogo from '../Images/location_logo.svg';


export default function HomePage() {
    const [displayedCategory, setDisplayedCategory] = useState('1'); // 1
    const [status, setStatus] = useState("notSubmitted"); // 2
    const [request, setRequest] = useState({
        name: '',
        email:'',
        lastname:'',
        organization:'non',
        telephone:'',
        regard: '',
        message:''
    }); // 3

    const initError = {
        exists: false,
        helperText: null,
    };

    const [enteredNameTouched, setEnteredNameTouched] = useState(false); // 4
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false); // 5
    const [enteredLastnameTouched, setEnteredLastnameTouched] = useState(false);
    const [enteredTelephoneTouched, setEnteredTelephoneTouched] = useState(false);
    const [enteredRegardTouched, setEnteredRegardTouched] = useState(false);
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

    const [nameError, setNameError] = useState(initError); 
    const [emailError, setEmailError] = useState(initError);
    const [lastnameError, setLastnameError] = useState(initError);
    const [telephoneError, setTelephoneError] = useState(initError);
    const [regardError, setRegardError] = useState(initError);
    const [messageError, setMessageError] = useState(initError);


  

    useEffect(() => {
        if (!request.name && enteredNameTouched) {
            setNameError({
              exists: true,
              helperText: "schreibe deinen Namen",
            });
        } else {
            setNameError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.email && enteredEmailTouched) {
            setEmailError({
              exists: true,
              helperText: "Schreiben Sie eine E-Mail",
            });
        } else {
            setEmailError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.lastname && enteredLastnameTouched) {
            setLastnameError({
              exists: true,
              helperText: "Schreiben Sie Ihren Nachnamen",
            });
        } else {
            setLastnameError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.telephone && enteredTelephoneTouched) {
            setTelephoneError({
              exists: true,
              helperText: "Schreiben Sie eine Telefonnummer",
            });
        } else {
            setTelephoneError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.regard && enteredRegardTouched) {
            setRegardError({
              exists: true,
              helperText: "einen Betreff schreiben",
            });
        } else {
            setRegardError({
              exists: false,
              helperText: null,
            });
        }
        if (!request.message && enteredMessageTouched) {
            setMessageError({
              exists: true,
              helperText: "Nachricht schreiben",
            });
        } else {
            setMessageError({
              exists: false,
              helperText: null,
            });
        }
       
    }, [request, enteredNameTouched, enteredEmailTouched, enteredLastnameTouched, enteredTelephoneTouched, enteredRegardTouched, enteredMessageTouched])

    const form = useRef();

    // const nameIsValid = !nameError.exists 
    // const emailIsValid = !nameError.exists
    // const aboutIsValid = !aboutError.exists

    const nameBlurHandler = (e) => {
        setEnteredNameTouched(true);
    };

    const handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        setRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!request.name) {
            setNameError({
              exists: true,
              helperText: "schreibe deinen Namen",
            });
            return
        } 
        if (!request.email) {
            setEmailError({
              exists: true,
              helperText: "Schreiben Sie eine E-Mail",
            });
            return
        } 
        if (!request.lastname) {
            setLastnameError({
              exists: true,
              helperText: "Schreiben Sie Ihren Nachnamen",
            });
            return
        } 
        if (!request.telephone) {
            setTelephoneError({
              exists: true,
              helperText: "Schreiben Sie eine Telefonnummer",
            });
            return
        } 
        if (!request.regard) {
            setRegardError({
              exists: true,
              helperText: "einen Betreff schreiben",
            });
            return
        } 
        if (!request.message) {
            setMessageError({
              exists: true,
              helperText: "Nachricht schreiben",
            });
            return
        }

        


        if (nameError.exists || emailError.exists || lastnameError.exists || telephoneError.exists || regardError.exists || messageError.exists) {
            // return;
            console.log('NOT!!!')
        } else {
            emailjs.sendForm('service_mo5a0en', 'template_cr8cyk6', form.current, {
                publicKey: 'TRrJ-iqCKxRNqu_Nn',
            }).then(
                () => {
                    console.log('SUCCESS!');
                    document.getElementById("submitButton").disabled = true;
                    document.getElementById("name").disabled = true;
                    document.getElementById("email").disabled = true;
                    document.getElementById("lastname").disabled = true;
                    document.getElementById("organization").disabled = true;
                    document.getElementById("telephone").disabled = true;
                    document.getElementById("regard").disabled = true;
                    document.getElementById("message").disabled = true;
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        }


    
        
      };

  
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
    return (
        <>
        <Header/>
        <section id="hero" className={classes.hero}>
            <div className={classes.banner}>
                {
                    window.innerWidth < 991 
                    ?
                    <>
                    <video style={{width:'90vw', objectFit:'cover', height:'calc(80vh + 0px)', minHeight:'800px',  filter: 'brightness(95%)', marginTop:'46px', borderRadius:'16px' }} controlsList="nofullscreen" autoPlay="true" muted="true" loop="true" controls='' webkit-playsInLine="true" playsInLine="true">
                    <source src={bannerResponsive} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    </>
                    :
                    <>
                    <video style={{width:'100vw', objectFit:'cover', height:'calc(100vh + 100px)',  filter: 'brightness(90%)' }} controlsList="nofullscreen" autoPlay="true" muted="true" loop="true" controls='' webkit-playsInLine="true" playsInLine="true">
                    <source src={banner} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div class="custom-shape-divider-bottom-1734117816">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    </>
                }
                
            </div>
            
            <div className={classes.fisrtHalf}>
                {

                }
                <h1>Ihre Vision, unsere Expertise</h1>
                <h2>Persönliche und unternehmerische Exzellenz für die <br/> Zukunft der Immobilienbranche</h2>
                <h3>Jetzt kostenloses Erstgespräch <br/> vereinbaren!</h3>
            </div>
            <Calendar shown={true} />
            <div className={classes.heroBottomText}>
                <h4>Programme und Module <br/> ansehen</h4>
                <svg width="54" height="67" viewBox="0 0 54 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.0558 38.8281L27.0279 64.0002L2.99998 38.8281" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.033 63L27.033 3" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            

        </section>
        <section id="Überschellenberg.immo" className={classes.about}>
            <div className={classes.aboutMain}>
                <h1>Über schellenberg.immo</h1>
                <p>
                    schellenberg.immo unterstützt Fachkräfte und Unternehmen der Immobilienbranche 
                    bei ihrer Weiterentwicklung. Basierend auf über 30 Jahre Erfahrung in Architektur 
                    und Immobilienbewirtschaftung, fördert das Unternehmen heute mit ingrado.immo die 
                    persönliche Resilienz und Karriereentwicklung von Business Athleten. Innovage.immo 
                    bietet zukunftsorientierte Unternehmenslösungen, die auf innovative, nachhaltige 
                    und familienfreundliche Arbeitsmodelle abzielen
                </p>
            </div>
            <div className={classes.aboutPersons}>
                <div className={classes.aboutPerson}>
                    <div className={classes.aboutPersonImg}>
                        <img src={dummy}/>
                    </div>
                    <h3>Philipp Schellenberg</h3>
                    <span>Inhaber und Geschäftsführer</span>
                    <p>
                        Ich bin seit dem Jahr 2002 in der Immobilienbranche «zu Hause» und will 
                        durch meine Integrität, meinem Verantwortungsbewusstsein sowie dem Sinn 
                        für das Machbare Menschen motivieren, Wissen teilen und gemeinsam Grosses 
                        erreichen. Für mich ist meine tägliche Arbeit ein Zusammenspiel von Management 
                        und Leadership mit einer gesunden Portion Menschlichkeit, bei der Vereinbarkeit 
                        von Familie und Beruf möglich ist..
                    </p>
                    <div className={classes.aboutPersonSocial}>
                        <img src={facebookLogo} />
                        <img src={instagramLogo} />
                        <img src={xLogo} />
                    </div>
                </div>
                <div className={classes.aboutPerson}>
                    <div className={classes.aboutPersonImg}>
                        <img src={dummy}/>
                    </div>
                    <h3>Claudia Schellenberg</h3>
                    <span>Leitung Backoffice/Administration</span>
                    <p>
                        Mit meiner langjährigen Branchen- und Führungserfahrung sowie 12-jährigen 
                        Behördentätigkeit im schulischen Umfeld gelingt es mir, im dynamischen Umfeld 
                        der Immobilienbranche meinem Anspruch Verantwortung wahrzunehmen, gerecht zu 
                        werden. Mein Interesse, Freude und Verständnis an strategischen, 
                        betriebswirtschaftlichen, politischen und sozialen Themen runden mein Profil 
                        ab woduch meine Auftraggeber einen lösungsorientierten, sozialkompetenten und 
                        verantwortungsbewussten Sparringpartner auf Augenhöhe an Ihrer Seite haben.
                    </p>
                    <div className={classes.aboutPersonSocial}>
                        <img src={facebookLogoDark} />
                        <img src={instagramLogoDark} />
                        <img src={xLogoDark} />
                    </div>
                </div>
            </div>
        </section>
        <section id="Coaches&Mentoren" className={classes.mentorsAndCoaches}>
            <div className={classes.mentorsAndCoachesIntro}>
                <h2>Mentoren und Coaches</h2>
                <p>
                    Hinter jedem Erfolg steht ein starker Partner – unsere Mentoren und Coaches begleiten 
                    Sie mit Erfahrung, Herz und Leidenschaft, um Ihre Ziele zu erreichen und Ihr Potenzial 
                    voll auszuschöpfen.
                </p>
            </div>
            <div className={classes.mentorsAndCoachesPeople}>
                    <div className={classes.mentorOrCoach}>
                        <div className={classes.aboutPersonImg}>
                        <img src={dummy}/>
                    </div>
                        <h3>Vanessa Meister</h3>
                        <span>Agil Coach</span>
                        <p>
                            Ich bin seit dem Jahr 2002 in der Immobilienbranche «zu Hause» und will durch 
                            meine Integrität, meinem Verantwortungsbewusstsein sowie dem Sinn für das Machbare 
                            Menschen motivieren, Wissen teilen und gemeinsam Grosses erreichen. Für mich ist 
                            meine tägliche Arbeit ein Zusammenspiel von Management und Leadership mit einer 
                            gesunden Portion Menschlichkeit, bei der Vereinbarkeit von Familie und Beruf 
                            möglich ist..
                        </p>
                        <div className={classes.aboutPersonSocial}>
                            <img src={facebookLogoDark} />
                            <img src={instagramLogoDark} />
                            <img src={xLogoDark} />
                        </div>
                    </div>

                    <div className={classes.mentorOrCoach}>
                        <div className={classes.aboutPersonImg}>
                        <img src={dummy}/>
                    </div>
                        <h3>Lukas Vetsch</h3>
                        <span>E-Learning Spezialist</span>
                        <p>
                            Mit meiner langjährigen Branchen- und Führungserfahrung sowie 12-jährigen 
                            Behördentätigkeit im schulischen Umfeld gelingt es mir, im dynamischen Umfeld der 
                            Immobilienbranche meinem Anspruch Verantwortung wahrzunehmen, gerecht zu werden. 
                            Mein Interesse, Freude und Verständnis an strategischen, betriebswirtschaftlichen, 
                            politischen und sozialen Themen runden mein Profil ab woduch meine Auftraggeber 
                            einen lösungsorientierten, sozialkompetenten und verantwortungsbewussten 
                            Sparringpartner auf Augenhöhe an Ihrer Seite haben.
                        </p>
                        <div className={classes.aboutPersonSocial}>
                            <img src={facebookLogoDark} />
                            <img src={instagramLogoDark} />
                            <img src={xLogoDark} />
                        </div>
                    </div>

                    <div className={classes.mentorOrCoach}>
                        <div className={classes.aboutPersonImg}>
                        <img src={dummy}/>
                    </div>
                        <h3>Philipp Schellenberg</h3>
                        <span>Fachmentor Immobilien</span>
                        <p>
                            Ich bin seit dem Jahr 2002 in der Immobilienbranche «zu Hause» und will durch meine 
                            Integrität, meinem Verantwortungsbewusstsein sowie dem Sinn für das Machbare Menschen 
                            motivieren, Wissen teilen und gemeinsam Grosses erreichen. Für mich ist meine tägliche 
                            Arbeit ein Zusammenspiel von Management und Leadership mit einer gesunden Portion 
                            Menschlichkeit, bei der Vereinbarkeit von Familie und Beruf möglich ist..
                        </p>
                        <div className={classes.aboutPersonSocial}>
                            <img src={facebookLogoDark} />
                            <img src={instagramLogoDark} />
                            <img src={xLogoDark} />
                        </div>
                    </div>

                    <div className={classes.mentorOrCoach}>
                        <div className={classes.aboutPersonImg}>
                        <img src={dummy}/>
                    </div>
                        <h3>Stefan Schwitter</h3>
                        <span>Mentalcoach und Zenmover</span>
                        <p>
                            Mit meiner langjährigen Branchen- und Führungserfahrung sowie 12-jährigen Behördentätigkeit 
                            im schulischen Umfeld gelingt es mir, im dynamischen Umfeld der Immobilienbranche meinem 
                            Anspruch Verantwortung wahrzunehmen, gerecht zu werden. Mein Interesse, Freude und Verständnis 
                            an strategischen, betriebswirtschaftlichen, politischen und sozialen Themen runden mein Profil 
                            ab woduch meine Auftraggeber einen lösungsorientierten, sozialkompetenten und 
                            verantwortungsbewussten Sparringpartner auf Augenhöhe an Ihrer Seite haben.
                        </p>
                        <div className={classes.aboutPersonSocial}>
                            <img src={facebookLogoDark} />
                            <img src={instagramLogoDark} />
                            <img src={xLogoDark} />
                        </div>
                    </div>
                    
                </div>

        </section>
        <section id="Programme&Module" className={classes.programsAndModules}>
            <div className={classes.programsAndModulesContent}>
                <div className={classes.programsAndModulesDescription}>
                    <h2>Programme und Module für nachhaltigen Erfolg in der Immobilienbranche</h2>
                    <p>
                        Unsere Programme stärken Resilienz und Leadership und fördern innovative, 
                        nachhaltige Unternehmensmodelle – für Fachkräfte und Unternehmen in der Immobilienbranche.
                    </p>
                    
                </div>
                <div>
                    <div className={classes.toggleSelect}>
                            <button
                                onClick={() => setDisplayedCategory('1')}
                                style={{
                                    borderBottom: displayedCategory === '1' ? '2px solid #6D758F' : '2px solid #E1E4ED',
                                    fontWeight: displayedCategory === '1' ? '800' : '400'
                                }}
                            >
                                ingrado.immo
                            </button>
                            <button
                                onClick={() => setDisplayedCategory('2')} 
                                style={{
                                    borderBottom: displayedCategory === '2' ? '2px solid #6D758F' : '2px solid #E1E4ED',
                                    fontWeight: displayedCategory === '2' ? '800' : '400'
                                }}
                            >
                                innovage.immo
                            </button>
                    </div>
                    {
                        displayedCategory === '1' 
                        ?
                        <>
                        <div className={classes.categoryContent}>
                            <div className={classes.contentCharacteristic}>
                                <div>
                                    <h3>Resilienz- und Achtsamkeitstraining</h3>
                                    <p>
                                        Unsere Programme stärken Ihre Resilienz und mentale Gesundheit, 
                                        um auch in stressreichen Phasen klar und fokussiert zu bleiben.
                                    </p>
                                </div>
                                
                                <img src={pAndMImg1} />
                            </div>
                            <div className={classes.contentCharacteristic}>
                                <div>
                                    <h3>Fachmentoring</h3>
                                    <p>
                                        Profitieren Sie vom Fachwissen und der Erfahrung erfolgreicher
                                        Mentoren, die Ihnen helfen, Ihre beruflichen Ziele zu erreichen.
                                    </p>
                                </div>
                                
                                <img src={pAndMImg2} />
                            </div>
                            <div className={classes.contentCharacteristic}>
                                <div>
                                    <h3>Karriereentwicklung und Leadership-Coaching</h3>
                                    <p>
                                        Bauen Sie Ihre Führungsfähigkeiten aus und gestalten Sie 
                                        Ihre Karriere durch gezieltes Coaching.
                                    </p>
                                </div>
                                <img src={pAndMImg3} />
                            </div>
                        </div>
                        </>
                        :
                        <>
                        <div className={classes.categoryContent}>
                            <div className={classes.contentCharacteristic}>
                                <div>
                                    <h3>Title 1</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Facere quasi minima beatae cumque? Alias aliquam corporis, 
                                        maiores dolorum fuga numquam nihil suscipit eaque. Nobis, 
                                        earum sapiente. Praesentium odio incidunt non!
                                    </p>
                                </div>
                                <img />
                            </div>
                            <div className={classes.contentCharacteristic}>
                                <div>
                                    <h3>Title 2</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Facere quasi minima beatae cumque? Alias aliquam corporis, 
                                        maiores dolorum fuga numquam nihil suscipit eaque. Nobis, 
                                        earum sapiente. Praesentium odio incidunt non!
                                    </p>
                                </div>
                                <img />
                            </div>
                            <div className={classes.contentCharacteristic}>
                                <div>
                                    <h3>Title 3</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Facere quasi minima beatae cumque? Alias aliquam corporis, 
                                        maiores dolorum fuga numquam nihil suscipit eaque. Nobis, 
                                        earum sapiente. Praesentium odio incidunt non!
                                    </p>
                                </div>
                                
                                <img />
                            </div>
                        </div>
                        
                        </>
                    }
                    
                </div>
                <HashLink
                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                    to='/#Kontakt' 
                    className={classes.FooterLink}
                > 
                    <button className={classes.programsAndModulesCallToAction}>
                    <span>Lassen Sie uns reden</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.88458 1.8808L10.1999 6.00001L5.88458 10.1192" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.1999 6L1.79999 6" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                </HashLink>

                
            </div>
            
        </section>
        <section id="Netzwerk" className={classes.feedback}>
            <div className={classes.feedbackDescription}>
                <h2>Freunde und beratende Stimmen</h2>
                <p>Erfahrungen und Erfolge aus erster Hand</p>
            </div>
            <FeedbackCarousel />
        </section>
        <section id="Mitgliedschaften" className={classes.ourMemberships}>
            <div className={classes.ourMembershipsContent}>
                    <h2>Unsere Mitgliedschaften</h2>
                    <div className={classes.memberships}>
                        <img src={logo1}/>
                        <img src={logo2}/>
                        <img src={logo3}/>
                        <img src={window.innerWidth < 991 ? logo4s : logo4}/>
                        <img src={logo5}/>
                        <img src={logo6}/>
                        <img src={logo7}/>
                        <img src={logo8}/>
                    </div>
            </div>
        </section>
        {
            window.innerWidth < 991 
            ?
            <>
                <section id="Kontakt" className={classes.contact}>
                    <div className={classes.contactInfo}>
                        <h2>Wir sind für Sie da!</h2>
                        <p>
                            Lassen Sie uns über Ihre Ziele sprechen – für Sie oder Ihr Unternehmen. 
                            Unsere Experten freuen sich, Sie in einem persönlichen Gespräch kennenzulernen.
                        </p>
                        <div className={classes.contactElements}>
                            <div className={classes.contactElement}>
                                <div>
                                    <img style={{margin:'5px'}} src={mailLogo} />
                                </div>
                                <div className={classes.contactElementInfo}>
                                    <div>E-Mail:</div>
                                    <div style={{fontWeight:'600'}}>info@ingrado.immo</div>
                                </div>
                            </div>
                            <div className={classes.contactElement}>
                                <div>
                                    <img style={{margin:'5px'}} src={telephoneLogo} />
                                </div>
                                <div className={classes.contactElementInfo}>
                                    <div>Telefonisch</div>
                                    <div style={{fontWeight:'600'}}>Telefon: +41 44 244 60 60</div>
                                    <div style={{fontWeight:'600'}}>Mobil: +41 79 244 60 60</div>
                                </div>
                            </div>
                            <div className={classes.contactElement}>
                                <div>
                                    <img src={locationLogo} />
                                </div>
                                <div className={classes.contactElementInfo}>
                                    <div>Standort:</div>
                                    <div style={{fontWeight:'600'}}>Scherrstrasse 3, 8006 Zürich</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} >
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"name"}
                                type = {"text"}
                                name = {"name"}
                                id = {"name"}
                                placeholder = {"Name"}
                                value={request.txt}
                                handleChange={handleChange}
                                handleBlur={nameBlurHandler}
                                className={nameError.exists ? "is-invalid": ""}
                                errorDiv = {nameError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {nameError.helperText}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"email"}
                                type = {"text"}
                                name = {"email"}
                                id = {"email"}
                                placeholder = {"E-Mail"}
                                value={request.txt}
                                handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                                className={emailError.exists ? "is-invalid": ""}
                                errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {emailError.helperText}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"lastname"}
                                type = {"text"}
                                name = {"lastname"}
                                id = {"lastname"}
                                placeholder = {"Vorname"}
                                value={request.txt}
                                handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                                className={lastnameError.exists ? "is-invalid": ""}
                                errorDiv = {lastnameError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {lastnameError.helperText}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"organization"}
                                type = {"text"}
                                name = {"organization"}
                                id = {"organization"}
                                placeholder = {"Unternehmen (optional)"}
                                value={request.txt}
                                handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"telephone"}
                                type = {"text"}
                                name = {"telephone"}
                                id = {"telephone"}
                                placeholder = {"Telefon Nr."}
                                value={request.txt}
                                handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                                className={telephoneError.exists ? "is-invalid": ""}
                                errorDiv = {telephoneError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {telephoneError.helperText}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                style={{width: '95%'}}
                                title = {"regard"}
                                type = {"text"}
                                name = {"regard"}
                                id = {"regard"}
                                placeholder = {"Betreff"}
                                value={request.txt}
                                handleChange={handleChange}
                                // handleBlur={userBlurHandler}
                                className={regardError.exists ? "is-invalid": ""}
                                errorDiv = {regardError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {regardError.helperText}
                            /> 
                        </div>
                    
                        <TextArea 
                            placeholder="Nachricht hier eingeben..."
                            name="message" 
                            id="message"
                            handleChange={handleChange} 
                            // handleBlur={commentBlurHandler}
                            style={{height:'150px', resize:'none', borderRadius:'5px', padding:'10px', width:'95%', marginTop:'16px', border:'1px solid #F1F3F7', boxShadow:'0px 1px 4px 0px rgba(25, 33, 61, 0.08)', fontFamily:'"Inter"'}}
                            className={messageError.exists ? "is-invalid": ""}
                            errorDiv = {messageError.exists ? "text-danger" : "no-danger"}
                            errorMsg = {messageError.helperText}
                            // writtenCharacters ={feedback.comment.length}
                        />
                        <button id="submitButton" className={classes.contactSubmit} style={{marginTop:'25px'}}>
                            <span>Senden</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.88454 1.88074L10.1999 5.99995L5.88454 10.1192" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.1999 6L1.79996 6" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </form>
                    <GoogleMap mapWidth={'100vw'} mapHeight={'500px'}/>
                </section>
            </>
            :
            <>
                <section id="Kontakt" className={classes.contact}>
                    <GoogleMap mapWidth={'100vw'} mapHeight={'1000px'}/>
                    <div className={classes.contactContent}>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className={classes.formOneOfTwo}>
                                <div style={{marginBottom:'10px'}} >
                                    <Input 
                                        title = {"name"}
                                        type = {"text"}
                                        name = {"name"}
                                        id = {"name"}
                                        placeholder = {"Name"}
                                        value={request.txt}
                                        handleChange={handleChange}
                                        handleBlur={nameBlurHandler}
                                        className={nameError.exists ? "is-invalid": ""}
                                        errorDiv = {nameError.exists ? "text-danger" : "no-danger"}
                                        errorMsg = {nameError.helperText}
                                    /> 
                                </div>
                                <div style={{marginBottom:'10px'}} >
                                    <Input 
                                        title = {"email"}
                                        type = {"text"}
                                        name = {"email"}
                                        id = {"email"}
                                        placeholder = {"E-Mail"}
                                        value={request.txt}
                                        handleChange={handleChange}
                                        // handleBlur={userBlurHandler}
                                        className={emailError.exists ? "is-invalid": ""}
                                        errorDiv = {emailError.exists ? "text-danger" : "no-danger"}
                                        errorMsg = {emailError.helperText}
                                    /> 
                                </div>
                                <div style={{marginBottom:'10px'}} >
                                    <Input 
                                        title = {"lastname"}
                                        type = {"text"}
                                        name = {"lastname"}
                                        id = {"lastname"}
                                        placeholder = {"Vorname"}
                                        value={request.txt}
                                        handleChange={handleChange}
                                        // handleBlur={userBlurHandler}
                                        className={lastnameError.exists ? "is-invalid": ""}
                                        errorDiv = {lastnameError.exists ? "text-danger" : "no-danger"}
                                        errorMsg = {lastnameError.helperText}
                                    /> 
                                </div>
                                <div style={{marginBottom:'10px'}} >
                                    <Input 
                                        title = {"organization"}
                                        type = {"text"}
                                        name = {"organization"}
                                        id = {"organization"}
                                        placeholder = {"Unternehmen (optional)"}
                                        value={request.txt}
                                        handleChange={handleChange}
                                        // handleBlur={userBlurHandler}
                                    /> 
                                </div>
                                <div style={{marginBottom:'10px'}} >
                                    <Input 
                                        title = {"telephone"}
                                        type = {"text"}
                                        name = {"telephone"}
                                        id = {"telephone"}
                                        placeholder = {"Telefon Nr."}
                                        value={request.txt}
                                        handleChange={handleChange}
                                        // handleBlur={userBlurHandler}
                                        className={telephoneError.exists ? "is-invalid": ""}
                                        errorDiv = {telephoneError.exists ? "text-danger" : "no-danger"}
                                        errorMsg = {telephoneError.helperText}
                                    /> 
                                </div>
                            </div>
                            
                            <div style={{marginBottom:'10px'}} >
                                <Input 
                                    style={{width: '95%'}}
                                    title = {"regard"}
                                    type = {"text"}
                                    name = {"regard"}
                                    id = {"regard"}
                                    placeholder = {"Betreff"}
                                    value={request.txt}
                                    handleChange={handleChange}
                                    // handleBlur={userBlurHandler}
                                    className={regardError.exists ? "is-invalid": ""}
                                    errorDiv = {regardError.exists ? "text-danger" : "no-danger"}
                                    errorMsg = {regardError.helperText}
                                /> 
                            </div>
                        
                            <TextArea 
                                placeholder="Nachricht hier eingeben..."
                                name="message" 
                                id="message"
                                handleChange={handleChange} 
                                // handleBlur={commentBlurHandler}
                                style={{height:'210px', resize:'none', borderRadius:'5px', padding:'10px', width:'95%', marginTop:'16px', border:'1px solid #F1F3F7', boxShadow:'0px 1px 4px 0px rgba(25, 33, 61, 0.08)', fontFamily:'"Inter"'}}
                                className={messageError.exists ? "is-invalid": ""}
                                errorDiv = {messageError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {messageError.helperText}
                                // writtenCharacters ={feedback.comment.length}
                            />
                            <button id="submitButton" className={classes.contactSubmit} style={{marginTop:'25px'}}>
                                <span>Senden</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.88454 1.88074L10.1999 5.99995L5.88454 10.1192" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.1999 6L1.79996 6" stroke="white" stroke-width="1.28571" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </form>
                        <div className={classes.contactInfo}>
                            <h2>Wir sind für Sie da!</h2>
                            <p>
                                Lassen Sie uns über Ihre Ziele sprechen – für Sie oder Ihr Unternehmen. 
                                Unsere Experten freuen sich, Sie in einem persönlichen Gespräch kennenzulernen.
                            </p>
                            <div className={classes.contactElements}>
                                <div className={classes.contactElement}>
                                    <div>
                                        <img style={{margin:'5px'}} src={mailLogo} />
                                    </div>
                                    <div className={classes.contactElementInfo}>
                                        <div>E-Mail:</div>
                                        <div style={{fontWeight:'600'}}>info@ingrado.immo</div>
                                    </div>
                                </div>
                                <div className={classes.contactElement}>
                                    <div>
                                        <img style={{margin:'5px'}} src={telephoneLogo} />
                                    </div>
                                    <div className={classes.contactElementInfo}>
                                        <div>Telefonisch</div>
                                        <div style={{fontWeight:'600'}}>Telefon: +41 44 244 60 60</div>
                                        <div style={{fontWeight:'600'}}>Mobil: +41 79 244 60 60</div>
                                    </div>
                                </div>
                                <div className={classes.contactElement}>
                                    <div>
                                        <img src={locationLogo} />
                                    </div>
                                    <div className={classes.contactElementInfo}>
                                        <div>Standort:</div>
                                        <div style={{fontWeight:'600'}}>Scherrstrasse 3, 8006 Zürich</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>     
                </section>
            </>

        }
        <Footer />
        </>
    )
}
