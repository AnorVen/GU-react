import React, {Component} from 'react'
import PostActions from './PostActions';

export default class PostComents extends Component {
  render() {
    return (
      <div className="post_header_info">
        <h5 className="post_author">
          <a className="author" href="/moikrug">Мой круг</a>
          <span className="explain">
                    <span className="wall_fixed_label">запись закреплена</span>
                  </span>
        </h5>
        <div className="post_date">
          <a className="post_link" href="/wall-46638176_33861">
            <span className="rel_date rel_date_needs_update">6 минут назад</span>
          </a>
        </div>
        <PostActions/>

      </div>

    )
  }
}
