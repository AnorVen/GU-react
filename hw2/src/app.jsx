import React from 'react';
import ReactDOM from 'react-dom';
//import './app/styles/style.scss'
import FIO from './app/components/fio'


const app = document.getElementById('app');




class App extends React.Component{


  render(){
    return (
        <div >
          Второе приложение на React
          <FIO firstName='Иван' lastName='Neivan' />
        </div>
      )

  }
};




ReactDOM.render( <App/>, app);