import React, { Component } from 'react';
import firebase from '../../firebase';
import './Update.css'

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      url: '',
      userDB: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(e) {
     this.setState({
       [e.target.name]: e.target.value
     });
   }

   handleSubmit(e) {
      e.preventDefault();
       const userRef = firebase.database().ref('userEntry');
       const userEntry = {
         userID: this.state.userID,
         url: this.state.url
       }
      userRef.push(userEntry);
      this.setState({
        userID: '',
        url: ''
      });
   }

  

  removeItem(userEntryID) {
    const userRef = firebase.database().ref(`/userEntry/${userEntryID}`);
    userRef.remove();
  }

  render() {
      return (
            <form onSubmit={this.handleSubmit}
                className = 'form-style'
               >
                <input className = 'form__input'
                  type="text"
                  placeholder = 'My name'
                  name= 'userID'
                  value={this.state.userID} 
                  onChange={this.handleChange} 
                />

                 < input className = 'form__input'
                  type="text"
                  placeholder = 'My image url'
                  name = 'url'
                  value={this.state.url} 
                  onChange={this.handleChange} 
                />

                < input className = "pure-material-button-contained"
                   type = "submit"
                   value = "Submit"
                />
             
            </form>
    );
  }  
}
