import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './components/Clock'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <Clock />
                </div>
                <Footer year={new Date().getFullYear()}/>
            </div>
        );
    }
}

export default App
