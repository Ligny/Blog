import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import List from './Posts/Container/postcontainer';
import Comment from './Comments/Container/commentcontainer';
import Register from './Register/Container/registercontainer';
import Signup from '././Register/Component/signupcomponent'
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import "./index.css";


const PrivateRoute = ({component: Component, ...rest}) => {

    var status = localStorage?.getItem("status");

    return (
        <Route {...rest} render={props => (
            (status === "connected") ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Switch>
                    <PrivateRoute path="/comments/:id" component={Comment} />
                    <PrivateRoute path="/posts" component={List} />
                    <PrivateRoute path="/signup" component={Signup} />
                    <Route path="/" component={Register} />
                </Switch>
            </Provider>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
