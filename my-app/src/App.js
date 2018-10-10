import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import { allReucers, middleware } from './app/reducers/index';
import { Provider } from 'react-redux'

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';

import Blog from './app/pages/Blog';
import BlogItem from './app/pages/BlogItem';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';
import ToDo from './app/pages/ToDo';
import KanbanBoard from './app/components/kanban/KanbanBoard';


import './app/styles/bootstrap/css/bootstrap.css';
import './app/styles/bootstrap/css/bootstrap-theme.css';

import './App.css';

const store = createStore(allReucers, middleware);

class App extends Component {
  render() {
    return (
  <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/users" component={Users} />
            <Route path="/users/:userId" component={User}/>
            <Route path="/blogs" component={Blogs} />
            <Route path="/blogs/:blogId" component={BlogItem}/>
            <Route path="/comments" component={Coments}/>
            <Route path="/comments/:id" component={Coments}/>
            <Route path="/kanban" component={KanbanBoard}/>
            <Route path="/todo" component={ToDo}/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
        </Layout>
      </Router>
  </Provider>

    );
  }
}

export default App;
