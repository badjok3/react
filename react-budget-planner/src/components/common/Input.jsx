import React from 'react';

const input = (props) => {
    const { name, type = 'text', value, onChange, label } = props;
    return (
        <div>
            <label htmlFor="new-email" className="form-control-label">{label}</label>
            <input
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                value={value} />
        </div>
    );
}

export default input;