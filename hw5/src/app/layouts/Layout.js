import React from 'react';
import {Link} from 'react-router';

import Header from '../components/Blog/Header/Header';
import Menu from '../components/Blog/Header/Menu';
import MenuItem from '../components/Blog/Header/MenuItem';
import Footer from '../components/Blog/Footer/Footer';


export default class Layout extends React.Component
{
    constructor(props)
    {
        super(props);
        this.brand = 'React User Blog';
    }

    isActive(href)
    {
        return window.location.pathname === href;
    }

    render(){
        return (
            <div>
                <Header>
                  <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>Главная</MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>Пользователи</MenuItem>
                  </Menu>
                </Header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                            <hr/>
                            <Link to="/errorpage">Перейти на страницу с ошибкой</Link>
                        </div>
                    </div>
                </div>
                <Footer>&copy; 2018</Footer>
            </div>
        );
    }
}