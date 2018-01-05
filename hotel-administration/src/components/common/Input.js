import React, { Component } from 'react'

class Input extends Component {
    render() {
        const { name, type = 'text', value, onChange, label } = this.props;
        return (
            <div>
                <label htmlFor='new-email'>{label}</label>
            <input
                onChange={onChange}
                name={name}
                type={type}
                value={value}
                className="form-control"
            />
            </div>
        )
    }
}

export default Input