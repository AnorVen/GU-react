import React, {Component} from 'react';
import KanbanList from './KanbanList';


export default class KanbanBoard extends Component{
  render(){
    return(
      <div className={app}>
        <KanbanList id="todo" title="ToDo"
                    cards={this.props.cards.filter((cards)=>cards.status === 'todo')} />
        <KanbanList id="inProgress" title="In progress"
                    cards={this.props.cards.filter((cards)=>cards.status === 'in-progress')} />
        <KanbanList id="done" title="DONE"
                    cards={this.props.cards.filter((cards)=>cards.status === 'done')} />
      </div>


    )
  }
}