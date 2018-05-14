import React from 'react'


class App extends React.Component{
  render() {
    return <h1> hello <h1/>;
    }
}

React.DOM.render(<App/>, document.getElementById('root'))