import Dispatcher from '../Dispatcher';
import {ADD_COMMENT, FETCH_COMMENT_START} from '../const/ComentsConst';

export function addComent(title, userId, body) {
  const coment = {
    title,
    userId,
    body
  };
  Dispatcher.dispatch({
    type: ADD_COMMENT,
    payload: coment
  })
  
}


export default function fetchComents() {
    Dispatcher.dispatch({
      type: FETCH_COMMENT_START
    })
}