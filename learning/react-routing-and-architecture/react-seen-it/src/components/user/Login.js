import React, {Component} from 'react'
import { dataCollector, login } from '../utilities'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()

        this.dataCollector = (e) => {
            this.setState(dataCollector(e))

            this.login = (e, payload) => {
                this.setState({ loading: true })

                login(e, payload)
                    .then(res => {
                        localStorage.setItem('token', res._kmd.authtoken)
                        localStorage.setItem('user', res.username)
                        this.setState({ loading: false })
                    })
            }
        }
    }

    render() {
        return (
            <form id="loginForm" onSubmit={e => this.login(e, this.state)}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={e => this.dataCollector(e)} name="username" type="text" />
                <label>Password:</label>
                <input onChange={e => this.dataCollector(e)} name="password" type="password" />
                <input id="btnLogin" type="submit" value="Sign In" />
            </form>
        )
    }
}

export default Login