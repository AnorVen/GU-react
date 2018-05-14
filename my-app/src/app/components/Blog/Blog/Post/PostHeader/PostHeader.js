import React, {Component} from 'react'
import PostImage from './PostImage'
import PostInfo from './PostInfo'


export default class PostComents extends Component{
  render(){
    return(
      <div className="post_header">
        <PostImage/>
        <PostInfo/>

      </div>


    )
  }
}
