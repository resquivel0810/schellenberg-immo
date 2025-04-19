import React from 'react';
// import { useState, useEffect } from 'react';

import './Toast.css';

const Toast = props => {
    const { toastList, position, visible, pageContent } = props;

    return (
        <>
            <div 
                className={`notification-container ${position}`}
                style={{
                    opacity: !visible ? "0" : "1",
                    transition: "all .2s",
                    visibility: !visible ? "hidden" : "visible",
                    backgroundColor: '#FDFDFD',
                    border: `2px solid ${toastList.borderColor}`,
                    borderRadius:'5px',
                    boxShadow: '1px 2px 2px 2px rgb(221 221 221)',
                    zIndex: '10',
                  }}
            >
                    <div 
                        className={`notification ${position}`}
                    >
                        <div style={{margin: 'auto', marginLeft: '10px'}}>
                            <p style={{margin: '0', color:`#6D758F`, fontWeight: '700'}}>
                                {toastList.description}
                            </p>
                        </div>
                    </div>  
            </div>
        </>
    );
}

export default Toast;