import React from 'react';
//let React = require('react');
import ReactDOM from 'react-dom';

class App extends React.Component
{
    render()
    {
        return <div>
            <h1>Первое приложение на React!</h1>
            <p>Hello!</p>
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));