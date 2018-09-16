import { EventEmitter } from 'events';
import { ADD_COMMENT, FETCH_COMMENT_START, FETCH_COMMENT_END} from '../const/ComentsConst'
import { Dispatcher } from '../Dispatcher';
import axios from 'axios';

class ComentsStore extends EventEmitter{
  constructor(){
    super(...arg);

    this.coments = [];
  }

  fetchComentStart(){

    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {


      })

  }

}
