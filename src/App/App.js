import React, { Component } from 'react';
import './App.css';
import ProfileArray from '../Components/Feed/Profile/ProfileArray';
import Header from '../Components/Header'
//import Update from '../Components/Feed/Update/Update'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header 
            title = 'Unposted Letters' 
            description = 'Interaction Design, UID' 
          />
         < ProfileArray / >
         <a href ='http://www.shibhash.com' className = 'footer'>shibhash.com</ a>
        </div>
    );
  }
}

export default App;
