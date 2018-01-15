import React, {Component} from 'react'

class UserInput extends Component {
    render() {
        const style = {
            margin: "5px",
            padding: "5px",
            width: "7%",
            border: "1px solid darkblue",
            borderRadius: "3px"
        };

        const align = {
            textAlign: "center"
        }

        return (
            <div style={align}>
                First username:
                <input
                    type="text"
                    name="username"
                    onChange={this.props.changeHandler}
                    value={this.props.username}
                    style={style}
                />
            </div>
        )
    }
}

export default UserInput;