import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;
        return (
            <header className="navbar navbar-toggler">
                <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
                {loggedIn && <a href="javascript:void(0)" onClick={onLogout} className="nav-link">Logout</a>}
                {loggedIn && <NavLink to="/create" className="nav-link">Create hotel</NavLink>}
                {!loggedIn && <NavLink to="/login" activeClassName="active" className="nav-link">Login</NavLink>}
                {!loggedIn && <NavLink to="/register" activeClassName="active" className="nav-link">Register</NavLink>}
            </header>
        )
    }
}

export default Header