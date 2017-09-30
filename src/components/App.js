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
      presenterName:"Name",
      presenterLocation:"Location",
      presenterPhoto:InstPhoto,
      topic:"Unspecified",
      timeStamp:"00:00",
      documentPath:"/me/path.pdf",
      peers:0,
      pageIndex:0
    };
    // from server
    this.changePage = this.changePage.bind(this);
    this.updatePeer = this.updatePeer.bind(this);
    this.connectAction = this.connectAction.bind(this);
    this.setInitilStates = this.setInitilStates.bind(this);
    //To server bindings
    this.informOnCurrentPage = this.informOnCurrentPage.bind(this);
    //Test bindings
    this.test = this.test.bind(this);
  }

  componentWillMount()
  {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connectAction);
    this.socket.on('welcome',this.setInitilStates)
    this.socket.on('peerchanged', this.updatePeer);
    this.socket.on('currentPage',this.test);

  }


  // FROM SERVER
  connectAction()
  {
    //this.socket.emit("pageChange",4);
  }

  setInitilStates(serverData)
  {
    this.setState({topic: serverData.title, pageIndex:serverData.pageIndex});
  }

  updatePeer = (data)=> {
    this.setState({peers:data})
  }

  changePage(by) {
    this.setState(prevState => ({ pageIndex: prevState.pageIndex + by}),this.informOnCurrentPage);
  }
 

  // TO THE SERVER
  informOnCurrentPage(){this.socket.emit("pageChange",this.state.pageIndex);}

  test(data){this.setState({pageIndex:data})}

  // CLIENT SIDE
  render() {
    return (
      <div className="App">
        <Header />
        <Body 
          data={this.state} 
          changePage={this.changePage}
        />
        <Footer data={this.state}  />
      </div>
    );
  }
}

export default App;
