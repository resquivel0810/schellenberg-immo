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
        fetch(`https://login.schellenberg.immo/wp-json/wp/v2/voice?acf_format=standard&_fields=id,title,acf`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                console.log( )
                setFeedback(data)
                setTotalSlides(Object.entries(data).length)
            
            })

        
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
                    feedback.toReversed().map(feedback => 
                        <Comment 
                            id={feedback.comment_id} 
                            title={null}
                            text={feedback.acf.text}
                            author={feedback.acf.author}
                            authorPosition={feedback.acf.occupation}  
                            img={feedback.acf.photo}
                            url={feedback.acf.url}
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