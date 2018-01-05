import React, {Component} from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import LoginForm from './components/form/LoginForm'
import Home from './components/form/Home'

class App extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            token: ''
        }

        this.authenticate = data => {
            if(data.success) {
                this.setState({ token: data.token, username: data.user.name })
                localStorage.setItem('token', data.token)
            }
        }
    }

    componentDidMount() {
        this.setState({token: localStorage.getItem('token')})
    }

    render() {
        if(this.state.token !== '' && this.state.token !== 'undefined' && typeof localStorage.token !== 'undefined') {
            return (
                <div>
                    <Home />
                </div>
            )
        }

        return(
        <div>
            <SingUpForm />
            <LoginForm authenticate={this.authenticate} />
        </div>
        )
    }
}

export default App
