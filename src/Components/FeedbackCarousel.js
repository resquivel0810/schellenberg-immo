import React, {useEffect, useState} from 'react';

import classes from './feedbackCarousel.module.css'

import avatar from '../Images/avatar.png'

import imgRB from '../Images/Rahel_Bertschinger.png';
import imgJN from '../Images/Janosch_Nietlispach.png';
import imgMP from '../Images/Mirjam_Probst.png';
import imgBS from '../Images/Beda_Stadelmann.png';
import imgDL from '../Images/Dino_Lauber.png';
import imgCB from '../Images/Chris_Baltisberger.png';








const FeedbackCarousel = () => {
    const [feedback, setFeedback] = useState(
        [
            {
                "id": 1,
                "feedbackImg": imgRB,
                "feedbackTitle": "",
                "feedbackText": "«Als Breathwork-Coach weiss ich, wie kraftvoll bewusste Atmung und Achtsamkeit sind, um Stress abzubauen und mentale Klarheit zu gewinnen. Diese Techniken helfen, in herausfordernden Momenten fokussiert und gelassen zu bleiben. Philipp Schellenberg unterstützt Business Athleten dabei, durch Breathwork und Achtsamkeit ihre innere Stärke zu fördern und erfolgreich in der Immobilienbranche zu sein. Ich freue mich, ihn mit meiner Erfahrung zu unterstützen.»",
                "feedbackAuthor": "Rahel Bertschinger",
                "feedbackAuthorPosition": "Achtsamkeitstraining/Breathwork ",
                "url": 'www.athletictherapy.ch'
                
            },
            {
                "id": 2,
                "feedbackImg": imgJN,
                "feedbackTitle": "",
                "feedbackText": "«Als ehemaliger Profisportler, Unternehmer und Familienvater weiss ich, wie wichtig es ist, beruflichen Erfolg mit dem Familienleben zu vereinbaren. Philipp Schellenberg unterstützt und befähigt Business Athleten – Menschen, die sowohl beruflich als auch privat ihr Bestes geben wollen. Disziplin, Ausdauer und ständige Verbesserung zeichnen sie aus. Seine Mission, Fach- und Führungskräften, Nachwuchstalenten und Quereinsteigern die Werkzeuge zu bieten, um ihre beruflichen und familiären Ziele zu erreichen, haben mich überzeugt und stehe ihm dabei mit meiner Erfahrung und Wissen beratend zu Seite.»",
                "feedbackAuthor": "Janosch Nietlispach",
                "feedbackAuthorPosition": "Athletic Coach und Unternehmer",
                "url": ' www.janosch-nietlispach.ch'
                
            },
            {
                "id": 3,
                "feedbackImg": imgMP,
                "feedbackTitle": "",
                "feedbackText": "«Als Schulleiterin sehe ich täglich, wie wichtig eine ganzheitliche Förderung in der schulischen Entwicklung und Bildung ist. Philipp Schellenberg bringt mit der schellenberg.immo GmbH diesen Ansatz in die Immobilienbranche, indem er Business Athleten nicht nur beruflich stärkt, sondern auch ihre persönliche Resilienz und Lernbereitschaft fördert. Durch die dynamische Kombination von Coaching, Sparring und Fachmentoring entstehen nicht nur starke Fachkräfte, sondern auch Persönlichkeiten, die sich selbst reflektieren und lebenslanges Lernen als Schlüssel zum Erfolg sehen. Ich unterstütze diesen innovativen Ansatz mit voller Überzeugung.»",
                "feedbackAuthor": "Mirjam Probst",
                "feedbackAuthorPosition": "Schulleiterin und ehemalige Mentorin an der Pädagogischen Hochschule Zürich PHZH",
                "url": ' '
                
            },
            {
                "id": 4,
                "feedbackImg": imgBS,
                "feedbackTitle": "",
                "feedbackText": "«Als Physiotherapeut, Personal Trainer und Athletenbetreuer sehe ich täglich, wie wichtig es ist, Körper und Geist in Einklang zu bringen, um Spitzenleistungen zu erreichen. Philipp Schellenberg unterstützt mit seinem komplementären Mentoring- und Coachingprogramm Business Athleten in der Immobilienbranche dabei, ihr volles Potenzial ganzheitlich zu entfalten. Die Kombination aus Coaching, Fachmentoring und Sparring fördert nicht nur beruflichen Erfolg, sondern auch persönliches Wohlbefinden. Ich unterstütze diesen Ansatz zu 100%, da er Menschen hilft, langfristig erfolgreich und ausgeglichen zu bleiben.»",
                "feedbackAuthor": "Beda Stadelmann",
                "feedbackAuthorPosition": `Physiotherapeut und Personal Trainer`,
                "url": "www.momentum-therapie.ch"
                
            },
            {
                "id": 5,
                "feedbackImg": imgDL,
                "feedbackTitle": "",
                "feedbackText": "«Bei ZURZACH Care setzen wir auf einen ganzheitlichen Ansatz, der sich mit der Philosophie von schellenberg.immo GmbH deckt. Philip Schellenberg unterstützt Fach- und Führungskräfte im Immobiliensektor bei beruflichen und persönlichen Herausforderungen. Durch Coaching, Sparring und Fachmentoring fördert er eine Balance zwischen Karriere, Familie und Gesundheit – wobei erholsamer Schlaf entscheidend ist. Gerne stehe dem Coaching- und Mentoringprogramm von schellenberg.immo mit meiner Erfahrung und Expertise zur Seite.»",
                "feedbackAuthor": "Dino Lauber",
                "feedbackAuthorPosition": "GF Prävention und Reintegration sowie Kliniken Schlafmedizin ZURZACHCare",
                "url": ' '
                
            },
            // {
            //     "id": 6,
            //     "feedbackImg": imgCB,
            //     "feedbackTitle": "",
            //     "feedbackText": "«Im Spitzensport Eishockey lernt man, unter Druck zu performen, im Team zu funktionieren und immer an sich zu arbeiten – Eigenschaften, die auch im Berufsleben entscheidend sind. Genau hier setzt das Mentoring- Programm von schellenberg.immo an: Es überträgt die Prinzipien des Spitzensports auf die Business-Welt und hilft, berufliche Herausforderungen mit derselben Mentalität zu meistern, die man auf dem Eis braucht. Was mich besonders beeindruckt, ist der persönliche Ansatz. Das Programm unterstützt nicht nur bei der fachlichen Weiterentwicklung, sondern legt auch grossen Wert auf mentale Stärke und Resilienz – Faktoren, die im Sport wie im Beruf den Unterschied ausmachen können. Für mich ist schellenberg.immo ein idealer Sparringpartner für alle, die ihre Karriere mit der Disziplin und Leidenschaft eines Spitzensportlers angehen wollen.»",
            //     "feedbackAuthor": "Chris Baltisberger",
            //     "feedbackAuthorPosition": "Eishockeyspieler ZSC Lions",
                
            // },
        
        ]
    )
    const [totalSlides, setTotalSlides] = useState()
    const [currentSlide, setCurrentSlide] = useState(0)

    


    let z0 = null;
        
    function unify3(e) {	
        return e.changedTouches ? e.changedTouches[0] : e 
    };

    function lock3(e) { 
        z0 = unify3(e).clientX 
       
    };

    const indicators = document.querySelectorAll(".indicator")

    function move3(e) {

        if(z0 || z0 === 0) {
            let dz = unify3(e).clientX - z0, q = Math.sign(dz);
            
            if(q > 0 && currentSlide < parseInt(totalSlides) && currentSlide + parseInt(totalSlides) !== parseInt(totalSlides)){
                console.log("positive")
                setCurrentSlide(currentSlide - 1)
                if ( currentSlide  === parseInt(document.querySelectorAll(".indicator")[currentSlide].id)  ) {
                    document.querySelectorAll(".indicator").forEach(i => i.classList.remove('active'))	
                }
                document.querySelectorAll(".indicator")[currentSlide -1].classList.add('active');

            } else if (q < 0 && currentSlide < totalSlides -1){
                console.log("negative")
                setCurrentSlide(currentSlide + 1)
                if ( currentSlide  === parseInt(document.querySelectorAll(".indicator")[currentSlide].id ) ) {
                    document.querySelectorAll(".indicator").forEach(i => i.classList.remove('active'))	
                }
                document.querySelectorAll(".indicator")[currentSlide +1].classList.add('active');
            } else {
                console.log("LIMIT REACHED")
            }
          
           
        }
        
    };

    indicators.forEach(function(elem) {
        elem.addEventListener("click", function() {
            setCurrentSlide(parseInt(elem.id) )
            if (currentSlide  !== parseInt(indicators[elem.id].id) ) {
                indicators.forEach(i => {
                    i.classList.remove('active')
                })	
            }
            indicators[elem.id].classList.add('active');
            
        });
    });

    useEffect(() => {
        // fetch(`https://super-useful-strapi-0bbdc58e284a.herokuapp.com/api/feedbacks?populate=*`, { 
        //     method: 'GET' 
        // })
        //     .then(data => data.json())
        //     .then(data => {
        //         console.log(data.data)
        //         console.log(hardCodedFeedback)
        //         console.log( typeof(Object.entries(data.data) ))
        //         setFeedback(
        //             data.data
        //         ); 

        //         setTotalSlides(Object.keys(data.data).length)
        //         setFeedback((prevState, n=0) => [
        //             ...prevState.map(
        //                 u => {return {...u, "comment_id":n++}}
        //             )
        //         ])
            
        //     })

        setTotalSlides(Object.keys(feedback).length)
        setFeedback((prevState, n=0) => [
            ...prevState.map(
                u => {return {...u, "comment_id":n++}}
            )
        ])
    }, [])

    
    const Comment = ({ comment_id, url, title, text, author, authorPosition, img}) => {
        
        return (
            <>
            <div  className={classes.CarouselItem}>
                <div style={{height:'unset', display:'flex', justifyContent:'center', border: '1px solid #E1E4ED'}} className={classes.CarouselItemContent}  >
                    <div >
                        <img style={{width: '60px', height: '60px', borderRadius:'50%', objectFit:'cover'}} src={img} />
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <h4>{author}</h4>
                        <span>{authorPosition}</span>
                        <div>{url}</div>
                    </div>
                    
                </div>
            </div>
            </>
        )
    }



    return(
        <section className={classes.Carousel}>
           
            
            <div 
                className={classes.ContainerCarousel}
                style={{
                    width:`calc(${parseInt(totalSlides)}*100%)`,
                    transform:`translateX(calc(${parseInt(currentSlide)}/${parseInt(totalSlides)}*-100%))`
                }}
                onMouseDown={lock3}
                onTouchStart={lock3}
                onMouseUp={move3}
                onTouchEnd={move3}
            >
                {
                    feedback.map(feedback => 
                        <Comment 
                            id={feedback.comment_id} 
                            title={feedback.feedbackTitle}
                            text={feedback.feedbackText}
                            author={feedback.feedbackAuthor}
                            authorPosition={feedback.feedbackAuthorPosition}  
                            img={feedback.feedbackImg}
                            url={feedback.url}
                        />
               
                    )
                }

            </div>
            <ol 
                className={classes.CarouselIndicators}
                style={{
                    right:`calc((100vw - ${totalSlides}*60px)/2)`,
                    display:'none'
                }}
            >
            {
                feedback.map(feedback =>
                    <li id={feedback.comment_id} className={`indicator ${feedback.comment_id === currentSlide ? `${classes.active}` : ''}`}></li>
                )
            }
            </ol>
            <div className={classes.SlideButtons}>
                <button onClick={() => {
           
                    if (currentSlide < parseInt(totalSlides) && currentSlide + parseInt(totalSlides) !== parseInt(totalSlides) ){

                        setCurrentSlide(currentSlide - 1)
                        if ( currentSlide  === parseInt(document.querySelectorAll(".indicator")[currentSlide].comment_id)  ) {
                            document.querySelectorAll(".indicator").forEach(i => i.classList.remove('active'))	
                        }
                        document.querySelectorAll(".indicator")[currentSlide -1].classList.add('active');
                        // console.log(document.querySelector(".indicator.active"))
 
                    } else  if (currentSlide + parseInt(totalSlides)  === parseInt(totalSlides) ){
                        console.log("LIMIT REACHED")
                    }
                    console.log(currentSlide + totalSlides === totalSlides)
                    
                }} id='backwardButton' className='none' style={{opacity:currentSlide === 0 ?0: 1}}>
                    <svg style={{transform: 'rotate(180deg)'}} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.03835 12L8.96143 6.5L3.03835 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button onClick={() => {
           
                    if (currentSlide < totalSlides -1){
                        setCurrentSlide(currentSlide + 1)
                        if ( currentSlide  === parseInt(document.querySelectorAll(".indicator")[currentSlide].comment_id ) ) {
                            document.querySelectorAll(".indicator").forEach(i => i.classList.remove('active'))	
                        }
                        // console.log(currentSlide  == document.querySelectorAll(".indicator")[currentSlide].id , currentSlide, parseInt(document.querySelectorAll(".indicator")[currentSlide].id) )
                        document.querySelectorAll(".indicator")[currentSlide +1].classList.add('active');
                        
                    } else {
                        console.log("LIMIT REACHED")
                    }
                    
                }} id='fordwardButton' className='none' style={{opacity:currentSlide === totalSlides -1 ?0: 1}}>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.03835 12L8.96143 6.5L3.03835 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button>
                
            </div> 
            
            

        </section>
    )
}

export default FeedbackCarousel