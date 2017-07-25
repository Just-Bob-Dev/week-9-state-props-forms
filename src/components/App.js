import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';



class App extends Component {
  render() {
    return (
      <div className="App">
      <PlayListForm />
      </div>
    );
  }
}

export default App;
