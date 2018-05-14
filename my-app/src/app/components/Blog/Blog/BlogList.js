import React, {Component} from 'react'
import PostItem from './Post/BlogItem';


export default class BlogList extends Component{
  render(){
    return(
      <div className="blogList">
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
      </div>
    )
  }
}