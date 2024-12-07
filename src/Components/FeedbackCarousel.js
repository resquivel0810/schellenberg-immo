import React, {useEffect, useState} from 'react';

import classes from './feedbackCarousel.module.css'

import avatar from '../Images/avatar.png'




const FeedbackCarousel = () => {
    const [feedback, setFeedback] = useState([])
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
        fetch(`https://super-useful-strapi-0bbdc58e284a.herokuapp.com/api/feedbacks?populate=*`, { 
            method: 'GET' 
        })
            .then(data => data.json())
            .then(data => {
                console.log( typeof(data.data))
                console.log( typeof(Object.entries(data.data) ))
                setFeedback(
                    data.data
                ); 

                setTotalSlides(Object.keys(data.data).length)
                setFeedback((prevState, n=0) => [
                    ...prevState.map(
                        u => {return {...u, "comment_id":n++}}
                    )
                ])
            
            })
            
    }, [])

    
    const Comment = ({ comment_id, url}) => {
        
        return (
            <>
            <div  className={classes.CarouselItem}>
                <div style={{height:'unset', display:'flex', justifyContent:'center', border: '1px solid black'}} className={classes.CarouselItemContent}  >
                    <div >
                        <img style={{width: '60px'}} src={avatar} />
                        <h3>Erfolg im Beruf und Balance im Leben</h3>
                        <p>
                            Als ehemaliger Profisportler, Unternehmer und Familienvater weiß ich, 
                            wie wichtig es ist, beruflichen Erfolg mit dem Familienleben zu vereinbaren. 
                            Philipp Schellenberg unterstützt und befähigt Business Athleten – Menschen, 
                            die sowohl beruflich als auch privat ihr Bestes geben wollen. Seine Mission, 
                            Fach- und Führungskräften, Nachwuchstalenten und Quereinsteigern Werkzeuge für 
                            berufliche und familiäre Erfüllung zu bieten, hat mich überzeugt. Gerne stehe 
                            ich ihm dabei mit meiner Erfahrung beratend zur Seite.
                        </p>
                        <h4>Janosch Nietlisbach</h4>
                        <span>Teamleiter</span>
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
                            url={feedback.attributes.feedbackImage.data[0].attributes.url}
                        />
               
                    )
                }

            </div>
            <ol 
                className={classes.CarouselIndicators}
                style={{
                    right:`calc((100vw - ${totalSlides}*60px)/2)`
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3547 4C15.4854 4 15.6161 4.03185 15.7337 4.10615C16.0212 4.27598 16.0866 4.61564 15.8775 4.84916L9.47354 12.0033L15.8775 19.1575C16.0866 19.391 16.0212 19.7306 15.7337 19.9005C15.4462 20.0703 15.0279 20.0172 14.8188 19.7837L8.12742 12.3111C7.95752 12.1307 7.95753 11.8759 8.12742 11.6849L14.8188 4.22289C14.9495 4.08491 15.1456 4 15.3416 4L15.3547 4Z" fill="#B66A00"/>
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.64534 20C8.51465 20 8.38394 19.9682 8.26632 19.8938C7.9788 19.724 7.91343 19.3844 8.12254 19.1508L14.5265 11.9967L8.12254 4.84254C7.91344 4.60902 7.9788 4.26936 8.26632 4.09953C8.55384 3.9297 8.97207 3.98277 9.18118 4.21629L15.8726 11.6889C16.0425 11.8693 16.0425 12.1241 15.8726 12.3151L9.18118 19.7771C9.05049 19.9151 8.85442 20 8.65838 20L8.64534 20Z" fill="#B66A00"/>
                    </svg>
                </button>
                
            </div> 
            
            

        </section>
    )
}

export default FeedbackCarousel