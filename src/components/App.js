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
        <div className="container-fluid row">
          <PlayListForm className="col-md-6"/>
          <PlayList className="col-md-6" />
        </div>
      </div>
    );
  }
}

export default App;
