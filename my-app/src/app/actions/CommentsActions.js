import Dispatcher from '../Dispatcher';
import {ADD_COMMENT, FETCH_COMMENTS_START} from '../const/CommentsConst';

export function addComment(title, userId, body) {
  const comment = {
    title,
    userId,
    body
  };
  Dispatcher.dispatch({
    type: ADD_COMMENT,
    payload: comment
  })
  
}


export function fetchComments() {
    Dispatcher.dispatch({
      type: FETCH_COMMENTS_START
    })
}