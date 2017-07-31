import React, { Component } from 'react';
import logo from '../logo.svg';

export default class NavBar extends Component {
  render() {
    return(
      <div className="App-header col-md-12 row">
        <img src={logo} className='col-md-1 App-logo' />
        <h1 className="col-md-11 main-header">Play What?!</h1>
      </div>
    )
  }
}
