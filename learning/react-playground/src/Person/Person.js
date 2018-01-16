import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const inputStyle = {
        margin: '5px',
        padding: '5px',
        width: '15%',
        border: '1px solid darkblue',
        borderRadius: '3px'
    };

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="person" style={style}>
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

export default Radium(person);