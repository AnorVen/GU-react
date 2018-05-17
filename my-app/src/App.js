import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore} from 'redux';
import allReucers from './app/reducers/index';
import { Provider } from 'react-redux'

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Blog from './app/pages/Blog';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';
import ToDo from './app/pages/ToDo';
import KanbanBoard from './app/components/kanban/KanbanBoard';


import './app/styles/bootstrap/css/bootstrap.css';
import './app/styles/bootstrap/css/bootstrap-theme.css';

import './App.css';

const store = createStore(allReucers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            <Route path="users" component={Users}>
              <Route path=":userId" component={User}/>
            </Route>
            <Route path="blog" component={Blog}/>
            <Route path="comments" component={Comments}>
              <Route path=":id" component={Comment}/>
            </Route>
            <Route path="kanban" component={KanbanBoard}/>
            <Route path="todo" component={ToDo}/>
            <Route path="*" component={PageNotFound}/>
          </Route>
        </Router>
      </Provider>

    );
  }
}

export default App;
