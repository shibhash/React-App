import React, {Component} from 'react';
import Bio from './Bio'
import userData from '../../../data/userData'
import './ProfileArray.css'

class ProfileArray extends Component {

    componentDidMount() {
        const Array = userData.map(data => < Bio key = {
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
    }
    render() {
        return  (
            <div className = 'profile-array-container'>
                {Array}
            </div>   
        );
    }
}

export default ProfileArray;
