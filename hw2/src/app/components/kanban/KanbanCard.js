import React, {Component} from 'react';
import KanbanCheckList from './KanbanCheckList'

export default class KanbanCard extends Component {
  constructor(props) {
    super(props);
    this.state={
        showDetails: false
      }

      this.showCloseDetails = this.showCloseDetails.bind(this);



  }
  showCloseDetails(){
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    let cardDetails;


    if(this.state.showDetails){
      cardDetails = (
        <div className="cardDisk">
          {this.props.discrition}
          <KanbanCheckList cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      )


    }
    return (
      <div className='card'>
        <div className='cardTitle'>
          {this.props.title}
          <button onClick={this.showCloseDetails}>X</button>
        </div>
        {cardDetails}
      </div>
    )

  }
}