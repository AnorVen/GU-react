import React, {Component} from 'react'
import BlogItem from './Post/BlogItem';
import axios from 'axios';


export default class BlogList extends Component{
  constructor(props){
    super(props);

    this.state={
      posts: []
    }
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data
        });
      });

  }

  render(){  if(!this.state.posts.length){
    return null;
  }

    let post = this.state.posts.map((post, index)=>{
      return  <BlogItem key={index} {...post}/>
    });
    return(
      <div className="blogList">
        <h3>Новые посты</h3>
        {post}

      </div>
    )
  }
}