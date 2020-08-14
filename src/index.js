import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import List from './Posts/Container/postcontainer';
import Comment from './Comments/Container/commentcontainer';
import Register from './Register/Container/registercontainer';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/comments/:id" component={Comment} />
                    <Route path="/posts" component={List} />
                    <Route path="/" component={Register} />
                </Switch>
            </Provider>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
