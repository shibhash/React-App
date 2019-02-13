import React, {Component} from 'react';
import Oneshot from './Oneshot';
import TimeOfDay from './TimeOfDay'
import firebase from '../../firebase.js'; 

class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: 'false',
            userID:'',
            url: '',
            users: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
         this.setState({
             isClicked: !this.state.isClicked,
             userID: this.props.name,
             url: this.props.url
         });
         
        const userRef = firebase.database().ref('userData');
        const userData = {
            isClicked: this.state.isClicked,
            userID: this.state.userID,
            url: this.state.url
        }
        userRef.push(userData);
    }

    //https://css-tricks.com/intro-firebase-react/ <---thanks to this 

    render () {
        console.log(this.state.isClicked,this.state.userID, this.state.url)
        const divStyle = this.state.isClicked ? 'bio-box' : 'bio-box-active'
        return (
             < div className ={divStyle} onClick = {this.handleClick}>
                <Oneshot name={this.props.name} url={this.props.url} />
                    <div className = 'bio-text-container'>
                        <h1>{this.props.name} </h1> 
                        <p>
                           {!this.state.isClicked && <TimeOfDay location={this.props.location} />}
                        </p> 
                    </div>
                </div>
      
        )
    }
    
}

export default Bio;
