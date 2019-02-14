import React, {Component} from 'react';
import Bio from './Bio'
import userData from '../../../data/userData'
import './ProfileArray.css'
import firebase from '../../firebase.js';

class ProfileArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDB: []
        };
    }

     componentDidMount() {
         const itemsRef = firebase.database().ref('userEntry');
         itemsRef.on('value', (snapshot) => {
             let userDB = snapshot.val();
             let newState = [];
             for (let userEntry in userDB) {
                 newState.push({
                     id: userEntry,
                     userID: userDB[userEntry].userID,
                     url: userDB[userEntry].url
                 });
             }
             this.setState({
                 userDB: newState
             });
         });
     }

    render() {
        const localUserArray = userData.map(data => < Bio 
                id = {
                    data.id
                }
                name = {
                    data.name
                }
                location = {
                    data.location
                }
                url = {
                    data.url
                }
                />)

        const firebaseUserArray = this.state.userDB.map((userEntry) => < Bio 
                id = {
                    userEntry.id
                }
                name = {
                    userEntry.userID
                }

                url = {
                    userEntry.url
                }
                />)

        return  (
                <div className = 'profile-array-container'>
                    {
                        firebaseUserArray
                    } {
                        localUserArray
                    }
                </div>   
        );
    }
}

export default ProfileArray;
