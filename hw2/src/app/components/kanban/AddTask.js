import React, {Component} from 'react';

class AddTask extends Component{
  constructor(props){
    super(props),


      this.addTask = this.addTask.bind(this)
  }

  addTask(){
    //console.log(this.state.cards)
    let a = {
      id: 5,
      title: 'read book',
      discrition: 'book for React',
      status: 'done',
      tasks: []
    };
    const b = this.props.cards.push(a);
    this.props.parent.setState({
      cards: b
    });
    console.log(this.state.cards)
  }

  render(){
    return(
      <button onClick={this.addTask}>добавить таску</button>
    )

  }
}

export default AddTask;