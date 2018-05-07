import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { Container, Row, Col } from 'reactstrap';



class Layout extends Component{
  render(){
    return(
      <Container className='container'>
        <Header />
        <Main />
        <Footer />
      </Container>
    )
  }

}

export default Layout;