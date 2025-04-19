import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return(
        <div className={classes.container} >
            <label htmlFor={props.name} className={classes.customLabel}>
                {props.label}
            </label>
            <input 
                type={props.type}
                className={`${classes.customInput} ${props.className}`}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                onKeyDown={props.handleKeyDown}
                onBlur={props.handleBlur}
                placeholder={props.placeholder}
                disabled={props.disabled}
                autoFocus={props.autoFocus}
                style={props.style}
                // required
                checked={props.checked}
                data-checked={props.checked}
                
            />
            <div className={`${props.errorDiv} ${classes.customError}`}>
                {props.errorMsg}
            </div>
        </div>
    );
};

export default Input;