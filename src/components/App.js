import React, { Component } from 'react';
//import '../styles/w3.css';
import '../styles/w3-theme-grey.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

var io = require('socket.io-client');

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      peer:null
    };
  }
  componentWillMount()
  {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connectAction);
    this.socket.on('peerchanged', this.updatePeer)
  }

  connectAction()
  {}

  updatePeer(peers)
  {}

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
