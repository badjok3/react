import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'

import Header from './components/common/Header'
import Home from './components/Home'
import Create from './components/CreateHotel'
import Details from './components/Details'
import NotFound from './components/common/NotFound'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="container-fluid">
                <Header loggedIn={localStorage.getItem('token')} onLogout={this.onLogout}/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/view/:page" component={Home}/>
                    <Route path="/hotels/details/:id" component={Details}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/create" component={Create}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
