import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Article />
      </div>
    );
  }
}

export default App;
