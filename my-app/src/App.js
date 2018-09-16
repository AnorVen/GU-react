import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Blogs from './app/pages/Blog';
import BlogItem from './app/pages/BlogItem';
import Coments from './app/pages/Coments';
import ToDo from './app/pages/ToDo';
import KanbanBoard from './app/components/kanban/KanbanBoard'


import './app/styles/bootstrap/css/bootstrap.css';
import './app/styles/bootstrap/css/bootstrap-theme.css';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/users" component={Users} />
            <Route path="/users/:userId" component={User}/>
            <Route path="/blogs" component={Blogs} />
            <Route path="/blogs/:blogId" component={BlogItem}/>
            <Route path="/comets" component={Coments}/>
            <Route path="/kanban" component={KanbanBoard}/>
            <Route path="/todo" component={ToDo}/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
        </Layout>
      </Router>

    );
  }
}

export default App;
