import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component
{
  isActive(href) {
    return window.location.pathname === href;
  }
    render(){
        return (
            <li className={this.isActive(this.props.href) ? 'active': ''}>
                <Link to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}