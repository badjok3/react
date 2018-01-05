import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../utilities'
import '../../style/header.css'

class Header extends Component {
    constructor() {
        super()

        this.logout = (e) => {
            logout(e).then(data => {
                localStorage.clear();
            })
        }
    }
    render() {
        return (
            <header>
                {
                    localStorage.getItem('token') ?
                        (
                            <div>
                                <span className="logo">&#9731;</span>
                                <span className="header">SeenIt</span>
                                <div id="profile">
                                    <span id="username">Hello, {localStorage.getItem('user')}!</span>
                                    |<Link to="/logout"><button id="linkMenuLogout" onClick={e => this.logout(e)}>logout</button></Link>
                                </div>
                            </div>
                        )
                        :
                        null
                }
            </header>
        )
    }
}

export default Header