import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import List from './Posts/Container/PostContainer';
import Comment from './Comments/Container/CommentContainer';
import { store } from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/comments/:id" component={Comment} />
                    <Route path="/" component={List} />
                </Switch>
            </Provider>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
