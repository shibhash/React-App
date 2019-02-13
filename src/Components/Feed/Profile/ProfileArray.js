import React, {Component} from 'react';
import Bio from './Bio'

import userData from '../../../data/userData'
import './ProfileArray.css'

class ProfileArray extends Component {
    render() {
        const Array = userData.map(data => < Bio 
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

        return  (
                <div className = 'profile-array-container'>
                    {Array}
                </div>   
            
        );
    }
}

export default ProfileArray;
