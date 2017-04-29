import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';

import configureStore from './configureStore';
import Layout from './Containers/Layout/Layout';
import About from './Containers/Layout/About/About';
import Contacts from './Containers/Layout/Contacts/Contacts';
import Home from './Containers/Layout/Home/Home';
import Users from './Containers/Layout/Users/Users';

import '../node_modules/reset.css/reset.css';
import './index.css';
import './skeleton.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={Layout}>
                <Route  path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/users" component={Users}/>
            </Route>        
        </Router>
    </Provider>,
    document.getElementById('root')
    );
