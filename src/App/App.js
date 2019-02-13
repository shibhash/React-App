import React, { Component } from 'react';
import './App.css';
import ProfileArray from '../Components/Feed/Profile/ProfileArray';
import Header from '../Components/Header'


class App extends Component {
  render() {
    return (
        <div className="App">
          <Header 
            title = 'Unposted Letters' 
            description = 'Interaction Design, UID' 
            />
          <ProfileArray />
        </div>
    );
  }
}

export default App;
