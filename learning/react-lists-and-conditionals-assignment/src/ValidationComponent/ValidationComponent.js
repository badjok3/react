import React from 'react';

const validation = (props) => {
    let validationMessage;

    if (props.textLength < 5) {
        validationMessage = {
            text: 'Text too short',
            style: 'invalidText'
        }
    } else {
        validationMessage = {
            text: 'Text long enough',
            style: 'validText'
        }
    }

    return (
        <div>
            <p className={validationMessage.style}>{validationMessage.text}</p>
        </div>
    )
}

export default validation;