import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { HashLink } from 'react-router-hash-link';
import Header from "../Components/Header";
import Calendar from "../Components/Calendar";
import FeedbackCarousel from "../Components/FeedbackCarousel";
import GoogleMap from "../Components/GoogleMap";
import Input from "../Components/Input";
import TextArea from "../Components/Textarea";
import Footer from "../Components/Footer";
import Toast from "../Components/Toast";

import classes from './HomePage.module.css';

import banner from "../Videos/banner.mp4";
import bannerResponsive from '../Videos/banner_responsive.mp4';

import mailLogo from '../Images/mail_logo.svg';
import telephoneLogo from '../Images/telephone_logo.svg';
import locationLogo from '../Images/location_logo.svg';

export default function HomePage() {
    
    const [homepageContent, setHomepageContent] = useState([])
    const [employees, setEmployees] = useState([])
    const [mentors, setMentors] = useState([])
    const [ingradoPAndM, setIngradoPAndM] = useState([])
    const [innovagePAndM, setInnovagePAndM] = useState([])
    const [memberships, setMemberships] = useState([])
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

    const [toastVisible, setToastVisible] = useState(false) 
    const [toastProperties, setToastProperties] = useState([])

    useEffect(() => {
        
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/pages/54?acf_format=standard&_fields=id,title,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setHomepageContent(data.acf)
            })
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/employee?acf_format=standard&_fields=id,title,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setEmployees(data)
            })
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/mentor?acf_format=standard&_fields=id,title,acf&orderby=date&order=asc`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setMentors(data)
            })
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/ingrado-p-and-m?acf_format=standard&_fields=id,title,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setIngradoPAndM(data)
            })
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/innovage-p-and-m?acf_format=standard&_fields=id,title,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setInnovagePAndM(data)
            })
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/membership?acf_format=standard&_fields=id,title,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                setMemberships(data)
            })
            // 

    }, [])
  
    useEffect(() => {
        if (!request.name && enteredNameTouched) {
            setNameError({
              exists: true,
              helperText: `${homepageContent.input_name_not_empty_error}`,
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
              helperText: `${homepageContent.input_email_not_empty_error}`,
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
              helperText: `${homepageContent.input_lastname_not_empty_error}`
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
              helperText: `${homepageContent.input_telephone_not_empty_error}`,
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
              helperText: `${homepageContent.input_regard_not_empty_error}`,
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
              helperText: `${homepageContent.input_message_not_empty_error}`,
            });
        } else {
            setMessageError({
              exists: false,
              helperText: null,
            });
        }
       
    }, [request, enteredNameTouched, enteredEmailTouched, enteredLastnameTouched, enteredTelephoneTouched, enteredRegardTouched, enteredMessageTouched])

    useEffect(() => {
        setToastProperties({
            description: `${homepageContent.toast_form_send_message}`,
            borderColor: '#6D758F',
            icon: 'icon-success'
        })
    }, [homepageContent])

    const form = useRef();

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
    const nameIsValid = !nameError.exists && enteredNameTouched;
    const emailIsValid = !emailError.exists && enteredEmailTouched;
    const lastnameIsValid = !lastnameError.exists && enteredLastnameTouched;
    const telephoneIsValid = !emailError.exists && enteredEmailTouched;
    const regardIsValid = !regardError.exists && enteredRegardTouched;
    const messageIsValid = !messageError.exists && enteredMessageTouched


    const sendEmail = (e) => {
        e.preventDefault();
        setEnteredEmailTouched(true)
        setEnteredNameTouched(true)
        setEnteredLastnameTouched(true)
        setEnteredTelephoneTouched(true)
        setEnteredRegardTouched(true)
        setEnteredMessageTouched(true)
        
        if (!nameIsValid) {
            return;
        }
        if (!lastnameIsValid) {
            return;
        }
        if(!emailIsValid){
            return;
        }
        if(!telephoneIsValid){
            return;
        }
        if(!regardIsValid){
            return;
        }
        if(!messageIsValid){
            return;
        }


        if (nameError.exists || emailError.exists || lastnameError.exists || telephoneError.exists || regardError.exists || messageError.exists) {
            // return;
            console.log('NOT!!!')
        } else {
            setToastVisible(true)
            emailjs.sendForm('service_mo5a0en', 'template_cr8cyk6', form.current, {
                publicKey: 'TRrJ-iqCKxRNqu_Nn',
            }
            ).then(
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
                setTimeout(() => {
                    setToastVisible(false)
                }, 5000)
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
        <Toast
            toastList={toastProperties}
            position="top-right" 
            visible={toastVisible}
            pageContent={"pageContent"}
        />
        <section id="hero" className={classes.hero}>
            <div className={classes.banner}>
                {
                    window.innerWidth < 991 
                    ?
                    <>
                    <video style={{width:'90vw', objectFit:'cover', height:'calc(80vh + 0px)', minHeight:'800px',  filter: 'brightness(95%)', marginTop:'46px', borderRadius:'16px' }} controlsList="nofullscreen" autoPlay={true} muted={true} loop={true} controls='' playsInline={true}>
                    <source src={bannerResponsive} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    </>
                    :
                    <>
                    <video style={{width:'100vw', objectFit:'cover', height:'calc(100vh + 100px)',  filter: 'brightness(90%)' }} controlsList="nofullscreen" autoPlay={true} muted={true} loop={true} controls=''  playsInline={true}>
                    <source src={banner} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="custom-shape-divider-bottom-1734117816">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                    </>
                }
                
            </div>
            
            <div className={classes.fisrtHalf}>
                <h1>{homepageContent.hero}</h1>
                <h2 className={classes.subtitle}>{homepageContent.moto}</h2>
                <h3>{homepageContent.schedule}</h3>
            </div>
            <Calendar shown={true} />
            <div className={classes.heroBottomText}>
                <HashLink
                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                    to='/#Programme&Module' 
                    style={{textDecoration:'none', justifyItems:'center', maxWidth:'273px'}}
                > 
                    <h4>{homepageContent.go_to_pandms}</h4>
                    <svg style={{display:'flex', margin:'auto'}} width="54" height="67" viewBox="0 0 54 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.0558 38.8281L27.0279 64.0002L2.99998 38.8281" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M27.033 63L27.033 3" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </HashLink>
                
            </div>
            

        </section>
        <section id="Überschellenberg.immo" className={classes.about}>
            <div className={classes.aboutMain}>
                <h1>{homepageContent.about_title}</h1>
                <p>
                    {homepageContent.about_text}
                </p>
            </div>
            <div className={classes.aboutPersons}>
                {
                    employees.toReversed().map((e, i) => 
                        
                        <div key={i} className={classes.aboutPerson}>
                        <div className={classes.aboutPersonImg}>
                            <img className={i!==1?classes.mentorOrCoachImg:classes.aboutPersonImg2} src={e.acf.photo}/>
                        </div>
                        <h3>{e.acf.name}</h3>
                        <span>{e.acf.occupation}</span>
                        <p>
                            {e.acf.about}
                        </p>
                        <div className={classes.aboutPersonSocial}>
                            <a href={`${e.acf.link}`}>
                                <img src={e.acf.social_media_logo} />
                            </a>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
        <section id="Coaches&Mentoren" className={classes.mentorsAndCoaches}>
            <div className={classes.mentorsAndCoachesIntro}>
                <h2>{homepageContent.mentors_and_coaches_title}</h2>
                <p>
                    {homepageContent.mentors_and_coaches_text}
                </p>
            </div>
       
            
            <div className={classes.mentorsAndCoachesPeople}>
            {
                mentors.toReversed().map((m, i) => 
                    <div key={i} className={classes.mentorOrCoach}>
                        <div className={classes.aboutPersonImg}>
                        <img className={classes.mentorOrCoachImg} style={{filter:'grayscale(100%)'}} src={m.acf.photo}/>
                    </div>
                        <h3>{m.acf.name}</h3>
                        <span>{m.acf.occupation}</span>
                        <p>
                            {m.acf.about}
                        </p>
                        <div className={classes.aboutPersonSocial}>
                            <a href={m.acf.link}>
                                <img src={m.acf.social_media_logo} />
                            </a>
                        </div>
                    </div>
                )
            }
            </div>

        </section>
        <section id="Programme&Module" className={classes.programsAndModules}>
            <div className={classes.programsAndModulesContent}>
                <div className={classes.programsAndModulesDescription}>
                    <h2>{homepageContent.programs_and_modules_title}</h2>
                    <p>
                        {homepageContent.programs_and_modules_text}
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
                                {homepageContent.ingrado_button_text}
                            </button>
                            <button
                                onClick={() => setDisplayedCategory('2')} 
                                style={{
                                    borderBottom: displayedCategory === '2' ? '2px solid #6D758F' : '2px solid #E1E4ED',
                                    fontWeight: displayedCategory === '2' ? '800' : '400'
                                }}
                            >
                                {homepageContent.innovage_button_text}
                            </button>
                    </div>
                    {
                        displayedCategory === '1' 
                        ?
                        <>
                        <div className={classes.categoryContent}>
                            {
                                ingradoPAndM.toReversed().map((pm, i) => 
                                    <div key={i} className={classes.contentCharacteristic}>
                                    <div>
                                        <h3>{pm.acf.title}</h3>
                                        <p>
                                            {pm.acf.description}
                                        </p>
                                    </div>
                                    <img src={pm.acf.illustration} />
                                </div>
                                )
                            }
                        </div>
                        </>
                        :
                        <>
                        <div className={classes.categoryContent}>
                            {
                                innovagePAndM.toReversed().map(pm => 
                                    <div className={classes.contentCharacteristic}>
                                    <div>
                                        <h3>{pm.acf.title}</h3>
                                        <p>
                                            {pm.acf.description}
                                        </p>
                                    </div>
                                    <img src={pm.acf.illustration} />
                                </div>
                                )
                            }
                           
                        </div>
                        
                        </>
                    }
                    
                </div>
                <HashLink
                    scroll={(el) => scrollToTargetAdjusted(el.id, 100)}
                    to='/#Kontakt' 
                    style={{textDecoration:'none'}}
                > 
                    <button className={classes.programsAndModulesCallToAction}>
                    <span style={{textDecoration:'none'}}>{homepageContent.lets_talk_button}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.88458 1.8808L10.1999 6.00001L5.88458 10.1192" stroke="white" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.1999 6L1.79999 6" stroke="white" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                </HashLink>
            </div>
        </section>
        <section id="Netzwerk" className={classes.feedback}>
            <div className={classes.feedbackDescription}>
                <h2>{homepageContent.voices_title}</h2>
                <p>{homepageContent.voices_text}</p>
            </div>
            <FeedbackCarousel />
        </section>
        <section id="Mitgliedschaften" className={classes.ourMemberships}>
            <div className={classes.ourMembershipsContent}>
                <h2>{homepageContent.memberships_title}</h2>
                <div className={classes.memberships}>
                    {
                        memberships.toReversed().map((m) => 
                            <a key={m.id} href={`${m.acf.memeber_url}`} ><img src={m.acf.logo} /></a> 
                        )
                    }
                </div>
            </div>
        </section>
        {
            window.innerWidth < 991 
            ?
            <>
                <section id="Kontakt" className={classes.contact}>
                    <div className={classes.contactInfo}>
                        <h2>{homepageContent.title_mobile}</h2>
                        <p>
                            {homepageContent.text_mobile}
                        </p>
                        <div className={classes.contactElements}>
                            <div className={classes.contactElement}>
                                <div>
                                    <img style={{margin:'5px'}} src={mailLogo} />
                                </div>
                                <div className={classes.contactElementInfo}>
                                    <div>{homepageContent.email_title}</div>
                                    <div style={{fontWeight:'600'}}>{homepageContent.current_email}</div>
                                </div>
                            </div>
                            <div className={classes.contactElement}>
                                <div>
                                    <img style={{margin:'5px'}} src={telephoneLogo} />
                                </div>
                                <div className={classes.contactElementInfo}>
                                    <div>{homepageContent.telephone_title}</div>
                                    <div style={{fontWeight:'600'}}>{homepageContent.current_telephone}</div>
                                </div>
                            </div>
                            <div className={classes.contactElement}>
                                <div>
                                    <img src={locationLogo} />
                                </div>
                                <div className={classes.contactElementInfo}>
                                    <div>{homepageContent.address_title}</div>
                                    <div style={{fontWeight:'600'}}>{homepageContent.current_address}</div>
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
                                label = {`${homepageContent.input_name}`}
                                placeholder = {`${homepageContent.input_name_placeholder}`}
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
                                label = {`${homepageContent.input_email}`}
                                placeholder = {`${homepageContent.input_email_placeholder}`}
                                value={request.txt}
                                handleChange={handleChange}
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
                                label = {`${homepageContent.input_lastname}`}
                                placeholder = {`${homepageContent.input_lastname_placeholder}`}
                                value={request.txt}
                                handleChange={handleChange}
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
                                label = {`${homepageContent.input_organization}`}
                                placeholder = {`${homepageContent.input_organization_placeholder}`}
                                value={request.txt}
                                handleChange={handleChange}
                            /> 
                        </div>
                        <div style={{marginBottom:'10px'}} >
                            <Input 
                                title = {"telephone"}
                                type = {"text"}
                                name = {"telephone"}
                                id = {"telephone"}
                                label = {`${homepageContent.input_telephone}`}
                                placeholder = {`${homepageContent.input_telephone_placeholder}`}
                                value={request.txt}
                                handleChange={handleChange}
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
                                label = {`${homepageContent.input_regard}`}
                                placeholder = {`${homepageContent.input_regard_placeholder}`}
                                value={request.txt}
                                handleChange={handleChange}
                                className={regardError.exists ? "is-invalid": ""}
                                errorDiv = {regardError.exists ? "text-danger" : "no-danger"}
                                errorMsg = {regardError.helperText}
                            /> 
                        </div>
                        <TextArea 
                            label={`${homepageContent.input_message}`}
                            placeholder={`${homepageContent.input_message_placeholder}`}
                            name="message" 
                            id="message"
                            handleChange={handleChange} 
                            style={{height:'150px', resize:'none', borderRadius:'5px', padding:'10px', width:'95%', marginTop:'16px', border:'1px solid #F1F3F7', boxShadow:'0px 1px 4px 0px rgba(25, 33, 61, 0.08)', fontFamily:'"Inter"'}}
                            className={messageError.exists ? "is-invalid": ""}
                            errorDiv = {messageError.exists ? "text-danger" : "no-danger"}
                            errorMsg = {messageError.helperText}
                        />
                        <button id="submitButton" className={classes.contactSubmit} style={{marginTop:'25px'}}>
                            <span>{homepageContent.send_button_text}</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.88454 1.88074L10.1999 5.99995L5.88454 10.1192" stroke="white" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.1999 6L1.79996 6" stroke="white" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
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
                                        label = {`${homepageContent.input_name}`}
                                        placeholder = {`${homepageContent.input_name_placeholder}`}
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
                                        label = {`${homepageContent.input_email}`}
                                        placeholder = {`${homepageContent.input_email_placeholder}`}
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
                                        label = {`${homepageContent.input_lastname}`}
                                        placeholder = {`${homepageContent.input_lastname_placeholder}`}
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
                                        label = {`${homepageContent.input_organization}`}
                                        placeholder = {`${homepageContent.input_organization_placeholder}`}
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
                                        label = {`${homepageContent.input_telephone}`}
                                        placeholder = {`${homepageContent.input_telephone_placeholder}`}
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
                                    label = {`${homepageContent.input_regard}`}
                                    placeholder = {`${homepageContent.input_regard_placeholder}`}
                                    value={request.txt}
                                    handleChange={handleChange}
                                    // handleBlur={userBlurHandler}
                                    className={regardError.exists ? "is-invalid": ""}
                                    errorDiv = {regardError.exists ? "text-danger" : "no-danger"}
                                    errorMsg = {regardError.helperText}
                                /> 
                            </div>
                        
                            <TextArea 
                                label={`${homepageContent.input_message}`}
                                placeholder={`${homepageContent.input_message_placeholder}`}
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
                                <span>{homepageContent.send_button_text}</span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.88454 1.88074L10.1999 5.99995L5.88454 10.1192" stroke="white" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.1999 6L1.79996 6" stroke="white" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </form>
                        <div className={classes.contactInfo}>
                            <h2>{homepageContent.title}</h2>
                            <p>
                                {homepageContent.text}
                            </p>
                            <div className={classes.contactElements}>
                                <div className={classes.contactElement}>
                                    <div>
                                        <img style={{margin:'5px'}} src={mailLogo} />
                                    </div>
                                    <div className={classes.contactElementInfo}>
                                        <div>{homepageContent.email_title}</div>
                                        <div style={{fontWeight:'600'}}>{homepageContent.current_email}</div>
                                    </div>
                                </div>
                                <div className={classes.contactElement}>
                                    <div>
                                        <img style={{margin:'5px'}} src={telephoneLogo} />
                                    </div>
                                    <div className={classes.contactElementInfo}>
                                        <div>{homepageContent.telephone_title}</div>
                                        <div style={{fontWeight:'600'}}>{homepageContent.current_telephone}</div>
                                    </div>
                                </div>
                                <div className={classes.contactElement}>
                                    <div>
                                        <img src={locationLogo} />
                                    </div>
                                    <div className={classes.contactElementInfo}>
                                        <div>{homepageContent.address_title}</div>
                                        <div style={{fontWeight:'600'}}>{homepageContent.current_address}</div>
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