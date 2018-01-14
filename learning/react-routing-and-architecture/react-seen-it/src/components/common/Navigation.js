import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/menu.css'

class Navigation extends Component {

    render() {
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <Link className="nav" to="/catalog">Catalog</Link>
                <Link className="nav" to="/submit">Submit Link</Link>
                <Link className="nav" to="/myPosts">My Posts</Link>
            </div>
        )
    }
}

export default Navigation