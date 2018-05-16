import React, {Component} from 'react'
import PostText from './PostText'
import PostLike from './PostLike'
import PostComments from './PostComments'


export default class PostContent extends Component{
  render(){
    return(
      <div className="post_content">
        <div className="post_info">
          <PostText />
          <PostLike />
          <PostComments />
        </div>
      </div>


    )
  }
}
