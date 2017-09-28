import React, { Component } from 'react';
//import '../styles/w3.css';
import '../styles/w3-theme-grey.css';
import InstPhoto from '../images/instructor.PNG';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

var io = require('socket.io-client');

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      presenterName:"Unknown",
      presenterLocation:"Unknown",
      presenterPhoto:InstPhoto,
      title:"Unspecified",
      timeStamp:"00:00",
      documentPath:"/me/path.pdf",
      peers:0
    };

    this.updatePeer = this.updatePeer.bind(this);
    this.connectAction = this.connectAction.bind(this);
  }
  componentWillMount()
  {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connectAction);
    this.socket.on('peerchanged', this.updatePeer);
  }

  connectAction = () => {this.setState({peers:'3'});}

  updatePeer = (data)=> {
    this.setState({peers:'3'});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body data={this.state}/>
        <Footer peers={this.state.peers}/>
      </div>
    );
  }
}

export default App;
