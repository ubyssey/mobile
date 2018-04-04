import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article />
        <Header />
      </div>
    );
  }
}

export default App;
