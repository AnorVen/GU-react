<<<<<<< HEAD
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './app/styles/style.scss'
import KanbanBoard from './app/components/kanban/KanbanBoard'
import AddTask from './app/components/kanban/AddTask'
import './app/styles/kanban.css'

const app = document.getElementById('app');








class App extends Component {

 cardList = [
    {
      id: 1,
      title: 'read book',
      discrition: 'book for React',
      status: 'done',
      tasks: []
    },
    {
      id: 2,
      title: 'learn ',
      discrition: 'learn',
      status: 'todo',
      tasks: [
        {
          id: 1,
          name: 'learn jsx',
          done: true
        }, {
          id: 2,
          name: 'learn routing',
          done: false
        },
        {
          id: 3,
          name: 'learn store',
          done: false
        }
      ]
    },
    {
      id: 3,
      title: 'sleep',
      discrition: 'sleep',
      status: 'in-progress',
      tasks: []
    },
    {
      id: 4,
      title: 'kanban',
      discrition: 'kanban',
      status: 'in-progress',
      tasks: []
    }
  ];

  constructor(props){
    super(props);

    this.state = {
      cards: this.cardList
    };

  }




  render() {
    return (
      <div>
        Kanban
        <KanbanBoard cards={this.state.cards} />

        <AddTask parent={this} cards={this.state.cards} />


      </div>
    )

  }
}

/*
App.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    discrition: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(React.PropTypes.object).isRequired
  })).isRequired
};
*/

ReactDOM.render(<App/>, app);
=======
import React from 'react';
import ReactDOM from 'react-dom';


const app = document.getElementById('app');

ReactDOM.render(
    <div onClick={()=>{alert('1');}}>
        Второе приложение на React
    </div>,
app);
>>>>>>> origin/hw5
