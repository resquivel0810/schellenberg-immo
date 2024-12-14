import React, { useState } from "react";

import calendar, {
  WEEK_DAYS,
  CALENDAR_MONTHS,
  getPlausibleYears, 
} from "../Helpers/calendar";
import CalendarDate from "../Components/CalendarDate";

import classes from './Calendar.module.css'; 


let listOfPrevYears

export default function Calendar({setSelectedDate=f=>f, selectedDate=new Date(), shown, close}) {

  const [dateState, setDateState] = useState({
    current: new Date(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const getCalendarDates = () => {
    const { current, month, year } = dateState;
    const calendarMonth = month || +current?.getMonth() + 1;
    const calendarYear = year || current?.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };

  const renderDayLabel = (day) => {
    const daylabel = WEEK_DAYS[day]
    return (
      <>
      <div style={{textAlign: 'center',color: '#696969', fontSize:'16px'}} key={Math.random()} >
        {daylabel}
      </div>
      </>
    );
  };


  return shown ? (

    <div 
      // style={{ width: "350px", position: 'absolute', zIndex:'2', left:'calc((100vw - 350px) / 2)', bottom:'160px', backgroundColor:'white'}}
      className={classes.calendar}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <div style={{display:'flex', justifyContent: 'space-between', margin: '20px 0', alignItems:'center'}}>
        <h2 style={{fontWeight:'600', margin:'0', fontSize:'28px'}}>{Object.values(CALENDAR_MONTHS)[dateState.month - 1]} {dateState.year}</h2>
        <div >
            
            <button
              className="noneStyleButton" 
              onClick={() => 
                {if(dateState.month === 1) {
                  setDateState({
                    current: dateState.current,
                    month: 12,
                    year: dateState.year -1,
                  }) 
                } else {
                  setDateState({
                    current: dateState.current,
                    month: dateState.month -1,
                    year: dateState.year ,
                  }) 
                } 
              }}

            >{previousButton()}</button>
            <button 
              className="noneStyleButton" 
              onClick={() => 
                {if(dateState.month === 12) {
                  setDateState({
                    current: dateState.current,
                    month: 1,
                    year: dateState.year +1,
                  }) 
                } else {
                  setDateState({
                    current: dateState.current,
                    month: dateState.month +1,
                    year: dateState.year ,
                  }) 
                } 
              }}
            >
              {NextButton()}
            </button>
            
        </div>
      </div>

      <div  
        className={classes.calendarDays}
      >
        <>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</>
        <>{getCalendarDates().map((d, i) => 
          <CalendarDate 
            isToday={new Date(d.join("/")).toDateString()===new Date().toDateString()}  key={i} day={d[2]}  
            setDate={() => {setSelectedDate(new Date(d.join("/")))}}
            date={d}
            isSelected={selectedDate.toDateString() === new Date(d.join("/")).toDateString()}
            test={() => console.log(selectedDate.toDateString() == new Date(d.join("/")).toDateString() )}
            inCurrentMonth={new Date(d.join("/")).getMonth() + 1 === dateState.month}
          />)}
        </>
      </div>
     
    </div>

  ) : null;
}

const NextButton = () => {
  return(
    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_105_2105)">
      <rect x="8" y="6.5" width="32" height="32" rx="16" fill="#F1F6FE"/>
      <path d="M22 17.8332L26.6667 22.4998L22 27.1665" stroke="#3B7BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <filter id="filter0_d_105_2105" x="0" y="0.5" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.744857 0 0 0 0 0.744857 0 0 0 0 0.744857 0 0 0 0.15 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2105"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2105" result="shape"/>
      </filter>
      </defs>
    </svg>   
  )
}

const previousButton = () => {
  return(
    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_105_2107)">
<rect x="40" y="38.5" width="32" height="32" rx="16" transform="rotate(-180 40 38.5)" fill="#F1F6FE"/>
<path d="M26 27.1668L21.3333 22.5002L26 17.8335" stroke="#3B7BE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_105_2107" x="0" y="0.5" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.744857 0 0 0 0 0.744857 0 0 0 0 0.744857 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2107"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2107" result="shape"/>
</filter>
</defs>
</svg>


  )
}

