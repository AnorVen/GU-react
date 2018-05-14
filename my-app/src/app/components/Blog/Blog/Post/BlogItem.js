import React, {Component} from 'react'
import PostHeader from './PostHeader/PostHeader';
import PostContent from './PostContent/PostContent';

export default class PostComents extends Component{
  render(){
    return(
      <div className="feed_row">
        <div id="post-46638176_33861" className="_post post page_block">
          <div className="_post_content">
            <PostHeader/>
            <PostContent/>
          </div>
        </div>
      </div>


    )
  }
}
