import React, { Component } from 'react';
import './App.css';
import HeaderBlock from './Components/HeaderBlock'
import Main from './Components/Main'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className = 'block'>
              <HeaderBlock title='Shib S. Sahoo' description='<React.js exploration />' />
          </div>
            <Main />
        </div>
    );
  }
}

export default App;
