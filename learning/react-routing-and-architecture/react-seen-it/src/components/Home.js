import React, {Component} from 'react'
import Login from './user/Login'
import Register from './user/Register'


class Home extends Component {

    render() {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    {!localStorage.getItem('token') ?
                        <div className="signup">
                            <Login />
                            <Register />
                        </div>
                        :
                        null
                    }


                    <div className="about">
                        <h1>Welcome to SeenIt</h1>
                        <p>
                            Share interesting links and discuss great content. It's what's happening now.
                        </p>
                        <p>Sign in or sign up in a second.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home