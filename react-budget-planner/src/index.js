import React from 'react';
import ReactDOM from 'react-dom';
import './style/site.css';
import './style/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/toastr/build/toastr.min.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
