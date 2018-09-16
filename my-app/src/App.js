import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Blog from './app/pages/Blog';
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
        <Route exact path="/" component={Layout}>
          <Main>
            <Route exact path="users" component={Users}>
              <Route path=":userId" component={User}/>
            </Route>

            <Route path="blog" component={Blog}/>
            <Route path="comets" component={Coments}/>
            <Route path="kanban" component={KanbanBoard}/>
            <Route path="todo" component={ToDo}/>
            <Route path="*" component={PageNotFound}/>
          </Main>
        </Route>
      </Router>

    );
  }
}

export default App;
