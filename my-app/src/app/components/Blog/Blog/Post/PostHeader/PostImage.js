import React, {Component} from 'react'

export default class PostImage extends Component{
  render(){
    return(
      <a className="post_image" href="/moikrug">
        <img src="https://pp.userapi.com/c628129/v628129376/19ce2/1hWyB5Rn9Vg.jpg"
             width="50" height="50" className="post_img"/>
        <span className="blind_label"> .</span>
      </a>


    )
  }
}
