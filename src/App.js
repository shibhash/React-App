import React, { Component } from 'react';
import './App.css';
//import IxdMassive from './Components/IxdMassive';
import ChatRoom from './Components/ChatRoom';

class App extends Component {
  render() {
    return (
        <div className="App">
          <ChatRoom />
        </div>
    );
  }
}

export default App;
