import React, {Component} from 'react';
import Bio from './Bio'
import userData from '../data/userData'

class UserProfile extends Component {

    render() {
        const BioArray = userData.map(data => < Bio key={
            data.id
        }
            name={
                data.name
            }
            location={
                data.location
            }
            url={
                data.url
            }
        />)
        
        return ( 
            <div className = 'user-tray'>
                {BioArray}
            </div>
            
        );
    }
}



export default UserProfile;
