import React, {Component} from 'react'
import PostActions from './PostActions';

export default class PostInfo extends Component {
   getData(){
    return (`${Math.floor(Math.random() * 25)}:${Math.floor(Math.random() * 61)}`)
  }

  /*
  *  "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body"*/
  render() {
    return (
      <div className="post_header_info">
        <h5 className="post_author">
         <span className="explain">{this.props.userId}
                    <span className="wall_fixed_label"> запись закреплена</span>
                  </span>
        </h5>
        <div className="post_date">
          <a className="post_link" href="/wall-46638176_33861">
            <span className="rel_date rel_date_needs_update">123</span>
          </a>
        </div>
        <PostActions/>

      </div>

    )
  }
}
