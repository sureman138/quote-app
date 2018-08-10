import React, { Component } from 'react';
import QuoteMachine from './QuoteMachine';
import './App.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <i className="fa fa-quote-left fa-sm"></i>
          <h1>Quote Me</h1>
          <i className="fa fa-quote-right fa-sm"></i>
        </div>
        <QuoteMachine />
      </div>

    );
  }
}

export default App;
