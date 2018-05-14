import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import Blog from './app/pages/Blog';
import Coments from './app/pages/Coments';
import KanbanBoard from "./app/components/kanban/KanbanBoard";


const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main} />
            <Route path="users" component={Users} />
            <Route path="blog" component={Blog} />
            <Route path="comets" component={Coments} />
            <Route path="kanban" component={KanbanBoard} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>, app);