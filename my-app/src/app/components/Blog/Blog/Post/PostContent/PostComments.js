import React, {Component} from 'react'

export default class PostComments extends Component{
  render(){
    return(
      <div className="replies">
        <div className="replies_wrap">
          <div className="replies_list _replies_list">
            <input type="hidden" id="start_reply-46638176_33861" defaultValue=""/>
          </div>
          <div id="reply_box_wrap-46638176_33861">
            <div className="reply_box_inner_wrap">
              <div className="reply_fakebox_wrap" id="reply_fakebox-46638176_33861">
                <a className="post_field_user_link _post_field_author" href="#">
                  <img className="post_field_user_image _post_field_image"
                       src="https://pp.userapi.com/c630020/v630020030/4958e
                                 /0sWQrcH3Pz0.jpg"/>
                  <img className="post_field_user_image post_
                            field_image_secondary _post_field_image" src="https://pp.userapi.com/
                            c630020/v630020030/4958e/0sWQrcH3Pz0.jpg"/>
                </a>
                <div className="reply_fakebox">Написать комментарий...</div>
              </div>
            </div>
          </div>
          <input id="post_hash-46638176_33861"
                 defaultValue="de9484b8b0d03d4f47"/>
        </div>
      </div>
    )
  }
}

