import React from 'react';
import './UserOutput.css';

const UserOutput = ( props ) => {
    return (
        <div className="output">
            <p>A text paragraph of User Output!</p>
            <p>By: { props.username }</p>
        </div>
    )
};

export default UserOutput;