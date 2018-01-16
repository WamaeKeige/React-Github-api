import React, { Component } from 'react';
import './App.css';
import Github from './Github';
import Header from './Components/Header';
import auth0 from 'auth0-js';
import Auth from './Auth/Auth.js';

const auth = new Auth();
auth.login();

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header/>
        <p className="App-intro">
          <Github/>
        </p>
      </div>
    );
  }
}

export default App;
