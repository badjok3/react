import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        margin: "5px",
        padding: "5px",
        width: "15%",
        border: "1px solid darkblue",
        borderRadius: "3px"
    };

    return (
        <div className="person" onClick={props.deletePerson}>
            Name:
                <input
                type="text"
                onChange={props.changeHandler}
                value={props.name}
                style={style}
            />
                <p>Hi, I'm {props.name}</p>
        </div>
    )
}

export default person