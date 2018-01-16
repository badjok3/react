import React from 'react';

import styles from './Person.css';

const person = (props) => {
    const inputStyle = {
        margin: '5px',
        padding: '5px',
        width: '15%',
        border: '1px solid darkblue',
        borderRadius: '3px'
    };

    return (
        <div className={styles.person}>
            Name:
                <input
                type="text"
                onChange={props.changeHandler}
                value={props.name}
                style={inputStyle}
            />
                <p onClick={props.deletePerson}>Hi, I'm {props.name}</p>
        </div>
    )
}

export default person;