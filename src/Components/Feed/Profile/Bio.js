import React, {Component} from 'react';
import Oneshot from './Oneshot';
import TimeOfDay from './TimeOfDay'
import firebase from '../../firebase.js'; 

class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: 'false',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
         this.setState({
             isClicked: !this.state.isClicked,
         });
    }

    removeItem(userEntryID) {
        const userRef = firebase.database().ref(`/userEntry/${userEntryID}`);
        userRef.remove();
    }
   
    render () {
        const divStyle = this.state.isClicked ? 'bio-box' : 'bio-box-active'

        return (
             <div className ={divStyle} onClick = {this.handleClick}>
                <Oneshot name={this.props.name} url={this.props.url} />

                    <div className = 'bio-text-container'>
                        <h1>{this.props.name} </h1> 

                        {!this.state.isClicked 
                        && (
                        <div>
                        <p><TimeOfDay location={this.props.location} /></p>
                            {typeof this.props.id != 'number' &&
                                < button className = "pure-material-button-contained"
                                    onClick={() => 
                                    this.removeItem(this.props.id)
                                    }>
                                    Delete
                                </button>
                            }
                        </div>
                        )}
                    </div>
                    
            </div>
      
        )
    }
    
}

export default Bio;
