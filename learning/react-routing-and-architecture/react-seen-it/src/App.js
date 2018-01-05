import React, {Component} from 'react';

import Header from './components/common/Header'
import Footer from "./components/common/Footer"
import Navigation from './components/common/Navigation'
import Routes from './components/Routes'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {!localStorage.getItem('token') ? null : <Navigation /> }
                <Routes />
                <Footer />
            </div>
        );
    }
}

export default App;
