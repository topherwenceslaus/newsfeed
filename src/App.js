import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import News from './Components/News'




class App extends Component {
  render() {
    return (
      <div className="App">
            <Form/>
            <News/>
      </div>
    );
  }
}

export default App;
