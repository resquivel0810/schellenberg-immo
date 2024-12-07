import React from 'react';

const TextArea = (props) => {
    return(
        <div style={{position: 'relative'}}>
            {/* <label htmlFor="props.name" className="form-label">
                {props.title}
            </label> */}
            <textarea
                className={` ${props.className}`}
                id={props.id}
                name={props.name}
                onChange={props.handleChange}
                onKeyDown={props.handleKeyDown}
                onBlur={props.handleBlur}
                placeholder={props.placeholder}
                disabled={props.disabled}
                // autoFocus={props.autoFocus}
                style={props.style}
      
                
            />
            <div style={{position:'absolute'}} className={props.errorDiv}>
                {props.errorMsg}
            </div>
            {/* <span style={{position:'absolute', bottom:'10px', right:'325px', fontSize:'11px'}}>{200 - props.writtenCharacters} characters</span> */}
        </div>
    );
};

export default TextArea;