import React from 'react'; 
import { Switch, Route } from 'react-router-dom';

import Login from './FormLogin';
import Account from './FormAccount'; 

const Content = props => (
    <Switch>
        <Route path="/Account">
            <Account/>
        </Route>
        <Route path="/">
            <Login/>
        </Route>
    </Switch>
)

export default Content;