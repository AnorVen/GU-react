import React, {Component} from 'react'
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';

export default class BlogItem extends Component{
  render(){
    return(
      <div className="feed_row">
        <div id={this.props.id} className="_post post page_block">
          <div className="_post_content">
            <PostHeader userId={this.props.userId}/>
            <PostContent title={this.props.title} />
          </div>
        </div>
      </div>


    )
  }
}
