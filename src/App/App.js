import React, { Component } from 'react';
import './App.css';
import ProfileArray from '../Components/Feed/Profile/ProfileArray';
//import ChatApp from '../Components/ChatApp/ChatApp';


class App extends Component {
  render() {
    return (
        <div className="App">
          <ProfileArray />
         {
           /*<ProfileArray /> <ChatApp /> */ }
        </div>
    );
  }
}

export default App;
