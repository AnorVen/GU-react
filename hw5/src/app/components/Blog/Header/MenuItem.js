import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component
{
    render(){
        return (
            <li className={this.props.isActive(this.props.href) ? 'active': ''}>
                <Link to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}