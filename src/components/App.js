import React, { Component } from 'react';
//import '../styles/w3.css';
import '../styles/w3-theme-grey.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
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
