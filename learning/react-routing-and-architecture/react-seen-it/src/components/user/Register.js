import React, { Component } from 'react'
import { dataCollector, register } from '../utilities'

class Register extends Component {
    constructor() {
        super()

        this.dataCollector = (e) => {
            this.setState(dataCollector(e))
        }

        this.register = (e, payload) => {
            this.setState({ loading: true })
            register(e, payload)
                .then(res => {
                    this.setState({ loading: false })
                    localStorage.setItem('token', res._kmd.authtoken)
                })
        }
    }

    render() {
        return (
            <form id="registerForm" onSubmit={e => this.register(e, this.state)}>
                <h2>Register</h2>
                <label>Username:</label>
                <input onChange={e => this.dataCollector(e)} name="username" type="text" />
                <label>Password:</label>
                <input onChange={e => this.dataCollector(e)} name="password" type="password" />
                <label>Repeat Password:</label>
                <input onChange={e => this.dataCollector(e)} name="repeatPass" type="password" />
                <input id="btnRegister" type="submit" value="Sign Up" />
            </form>
        )
    }
}

export default Register