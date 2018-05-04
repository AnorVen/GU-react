import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './app/components/kanban/KanbanBoard'
import './app/styles/kanban.css'
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";


const app = document.getElementById('app');


const cardList = [
  {
    id: 1,
    title: 'read book',
    discrition: 'book for React',
    status: 'done',
    tasks: []
  },
  {
    id: 2,
    title: 'learn ',
    discrition: 'learn',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'learn jsx',
        done: true
      }, {
        id: 2,
        name: 'learn routing',
        done: false
      },
      {
        id: 3,
        name: 'learn store',
        done: false
      }
    ]
  },
  {
    id: 3,
    title: 'sleep',
    discrition: 'sleep',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 4,
    title: 'kanban',
    discrition: 'kanban',
    status: 'in-progress',
    tasks: []
  }
];


class App extends Component {


  render() {
    return (
      <div>
        Kanban
        <KanbanBoard cards={cardList} />

      </div>
    )

  }
}


ReactDOM.render(<App/>, app);