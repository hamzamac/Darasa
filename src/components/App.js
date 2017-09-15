import React, { Component } from 'react';
//import '../styles/w3.css';
import '../styles/w3-theme-grey.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

var io = require('socket.io-client');

class App extends Component {

  componentWillMount()
  {
    
    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connectAction);
  }

  connectAction()
  {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
