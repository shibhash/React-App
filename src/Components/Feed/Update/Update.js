import React, { Component } from 'react';
import './Update.css'
import userData from '../../../data/userData'
import firebase from '../../Firebase';

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      userDB: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
     this.setState({
       value: event.target.value
     });
   }

   handleSubmit(event) {
      let obj = {}
      obj["name"] = this.state.value;
      obj["url"] = "";
      userData.push(obj);
      console.log(userData)
      console.log('Submitted name:' + this.state.value);
      event.preventDefault();
   }

  render() {
    return (
        <div className={this.props.className} >
            <h3>{this.props.title}</h3>
            <div className="form__row">
              <form onSubmit={this.handleSubmit}>
                <input 
                  className = 'form__input'
                  type="text"
                  placeholder = 'Update here'
                  value={this.state.value} 
                  onChange={this.handleChange} 
                />
              <input 
                className = "form__button"
                type="submit" 
                value="Submit" 
              />
            </form>
          </div>
            
        </div>
    );
  }  
}
