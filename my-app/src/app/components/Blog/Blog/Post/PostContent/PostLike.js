import React, {Component} from 'react'

export default class PostLike extends Component{
  render(){
    return(
      <div className="like_wrap _like_wall-46638176_33861 ">
        <div className="like_cont">
          <div className="like_btns">
            <a className="like_btn like _like" href="#" title="Нравится">
              <div className="like_button_count">1</div>
              <span className="blind_label">Нравится</span>
            </a>
            <span className="blind_label">Показать список оценивших</span>
            <a className="like_btn comment _comment _reply_wrap empty" href="#"
               title="Комментарий">
              <span className="blind_label">Комментарий</span>
            </a>
            <a className="like_btn share _share" href="#" title="Поделиться">
              <div className="like_button_count">1</div>
              <span className="blind_label">Поделиться</span>
            </a>
            <span className="blind_label">Показать список поделившихся</span>

          </div>
          <div className="like_views _views">333</div>
        </div>
      </div>

    )
  }
}
