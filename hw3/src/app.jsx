import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import Layout from './app/components/Layout/Layout'


const app = document.getElementById('app');




class App extends Component {
  render() {
    return (
      <div>
        шаблон главной страницы блога
        <Layout/>
      </div>
    )

  }
}


ReactDOM.render(<App/>, app);