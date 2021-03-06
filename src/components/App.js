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
    this.setNewPageFromPresenter = this.setNewPageFromPresenter.bind(this);
    //To server bindings
    this.informOnCurrentPage = this.informOnCurrentPage.bind(this);
    //Test bindings
    //this.test = this.test.bind(this);
  }

  componentWillMount()
  {
    this.socket = io('http://localhost:3000');
    this.socket.on('connect',this.connectAction);
    this.socket.on('welcome',this.setInitilStates)
    this.socket.on('peerchanged', this.updatePeer);
    this.socket.on('currentPage',this.setNewPageFromPresenter);
  }

  // FROM SERVER FUNCTIONS

  connectAction()
  {
    //this.socket.emit("pageChange",4);
  }

  //get and set the initial data when this socket join presentation
  setInitilStates(serverData)
  {
    this.setState({topic: serverData.title, pageIndex:serverData.pageIndex});
  }

  //update no. of peers everytime a new socket join the presentation
  updatePeer = (data)=> {
    this.setState({peers:data})
  }

  //called when next or previous page is cliked
  changePage(by) {
    this.setState(prevState => ({ pageIndex: prevState.pageIndex + by}),this.informOnCurrentPage);
  }
  setNewPageFromPresenter(data){this.setState({pageIndex:data})}
 
  // TO THE SERVER FUNCTIONS
  //get and set the current page of presentation after joining
  informOnCurrentPage(){this.socket.emit("pageChange",this.state.pageIndex);}
  //function for testing
  test(data){this.setState({pageIndex:data})}

  // CLIENT SIDE FUNCTIONS
  render() {
    return (
      <div className="App fullHeight  w3-row">
        <Header />
        <Body 
          data={this.state} 
          changePage={this.changePage}
        />
      </div>
    );
  }
}

export default App;
