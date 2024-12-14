import React from "react";
// import "./calendar.css"

export default function CalendarDate({ style = {},day, inCurrentMonth ,isToday, isSelected,date,setDate = f => f, test = f => f, ...props }) {
    
    return (
        <>
        <div
            {...props}
            style={{ ...style }}
            onClick={setDate}
            className={`calendarDay ${isToday ? 'isToday': 'otherDay'} ${isSelected ? 'selected': 'notSelected'} ${inCurrentMonth ? 'inCurrentMonth': 'notInCurrentMonth'}`}
            onDoubleClick={test}
        >{day}</div>
        </>
    )
}