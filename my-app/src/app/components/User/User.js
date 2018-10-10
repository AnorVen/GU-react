import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
import {Link} from 'react-router';
import {connect} from 'react-redux';
>>>>>>> origin/hw7-1



class User extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            <Link to={`/users/${this.props.id}`}>
              {this.props.username}
            </Link>
          </h3>
        </div>
        <div className="panel-body" onClick={this.props.onClick}>
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.website}</p>

        </div>
      </div>
    );
  }
}

export default User