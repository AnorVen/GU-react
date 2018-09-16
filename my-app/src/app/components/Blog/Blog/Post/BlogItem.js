import React, {Component} from 'react'
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';
import {Link} from "react-router-dom";

export default class BlogItem extends Component{
  render(){
    return(
      <div className="feed_row">
        <div id={this.props.id} className="_post post page_block">
          <div className="_post_content">
            <Link to="/blogs/{this.props.id}">{this.props.id}</Link>
            <PostHeader userId={this.props.userId}/>
            <PostContent title={this.props.title} />
          </div>
        </div>
      </div>


    )
  }
}
