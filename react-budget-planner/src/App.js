import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import NotFound from './components/common/NotFound';
import DetailsPage from './components/Details/DetailsPage';
import Create from './components/Create/Create';
import ListYear from './components/HomePage/ListYear';
import Header from './components/common/Header';
import PrivateRoute from './components/common/PrivateRoute';

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={localStorage.getItem('authToken')} onLogout={this.onLogout} />
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <PrivateRoute path="/years/:year" exact component={ListYear} />
                    <PrivateRoute path="/year/:year/month/:id" component={DetailsPage} />
                    <Route path="/create/:year/:month" component={Create} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/create" component={Create} />
                    <Route component={NotFound}/>
                </Switch>
                <footer>
                    <div className="container modal-footer">
                        <p>Budget Planner &copy; SoftUni 2017</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default withRouter(App);
