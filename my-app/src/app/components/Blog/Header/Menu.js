import React from 'react';
import {Link} from 'react-router';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {




  render() {
    let renderMenuItem = this.props.menuItems.map((item, key) =>
      (
        <MenuItem href={item.href} key={key}>
          <Link to={item.href}>
            {item.title}
          </Link>
        </MenuItem>
      )
    )
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {this.props.brand}
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {renderMenuItem}
          </ul>
        </div>
      </nav>
    );
  }
}