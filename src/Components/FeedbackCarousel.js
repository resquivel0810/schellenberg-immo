import React, {useEffect, useState} from 'react';

import classes from './feedbackCarousel.module.css'

import avatar from '../Images/avatar.png'



const FeedbackCarousel = () => {
    const [feedback, setFeedback] = useState(
        [
            {
                "id": 1,
                "feedbackTitle": "Erfolg im Beruf und Balance im Leben",
                "feedbackText": "Als ehemaliger Profisportler, Unternehmer und Familienvater weiß ich, wie wichtig es ist, beruflichen Erfolg mit dem Familienleben zu vereinbaren. Philipp Schellenberg unterstützt und befähigt Business Athleten – Menschen, die sowohl beruflich als auch privat ihr Bestes geben wollen. Seine Mission, Fach- und Führungskräften, Nachwuchstalenten und Quereinsteigern Werkzeuge für berufliche und familiäre Erfüllung zu bieten, hat mich überzeugt. Gerne stehe ich ihm dabei mit meiner Erfahrung beratend zur Seite.",
                "feedbackAuthor": "Tristan Fasnacht",
                "feedbackAuthorPosition": "Leiter Bewirtschaftung Schwez, Prevera AG",
                
            },
            {
                "id": 2,
                "feedbackTitle": "Mit dem richtigen Mindset zum Erfolg",
                "feedbackText": "Als Hockeytorhüter muss ich in entscheidenden Momenten fokussiert bleiben und dem hohen Druck standhalten – wie in der Immobilienbranche. Das richtige Mindset ist entscheidend: Herausforderungen annehmen, aus Rückschlägen lernen und den Spaß an der Aufgabe behalten. Philipp Schellenberg unterstützt Business Athleten, dieses Mindset zu entwickeln und ihre Stärken zu entfalten. Ich stehe ihm dabei gerne mit meiner Erfahrung zur Seite.",
                "feedbackAuthor": "Pascal Stutz",
                "feedbackAuthorPosition": "CEO, SWIT Zürich",
                
            },
        
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

    
    const Comment = ({ comment_id, url, title, text, author, authorPosition}) => {
        
        return (
            <>
            <div  className={classes.CarouselItem}>
                <div style={{height:'unset', display:'flex', justifyContent:'center', border: '1px solid #E1E4ED'}} className={classes.CarouselItemContent}  >
                    <div >
                        <img style={{width: '60px'}} src={avatar} />
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <h4>{author}</h4>
                        <span>{authorPosition}</span>
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