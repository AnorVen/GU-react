import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Header extends Component{
  render(){
    return(
      <Row className='header'>
        <Col  sm="5" className="logo">
          <div className="logo__img"><img
            src="https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
            alt="logo"/></div>
          <div className="logo__text">
            <p>приветствую на блоге</p>
          </div>
        </Col>
        <Col sm="4">
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
            <BreadcrumbItem><a href="#">About</a></BreadcrumbItem>
            <BreadcrumbItem><a href="#">Contact</a></BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col sm='3'>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-md">Large modal</button>

          <div className="modal fade bs-example-modal-md" role="dialog" aria-labelledby="myLargeModalLabel">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">

                  Зарегестируйтесь или войдите или ваще
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username" />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <Input placeholder="username" />
                    <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
                  </InputGroup>

              </div>
            </div>
          </div>


        </Col>
      </Row>
    )
  }
}

export default Header;