import React, {Component} from 'react'
import PostText from './PostText'
import PostLike from './PostLike'
import PostComents from './PostComents'


export default class PostContent extends Component{
  render(){
    return(
      <div className="post_content">
        <div className="post_info">
          <PostText />
          <PostLike />
          <PostComents />
        </div>
      </div>


    )
  }
}
