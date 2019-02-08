import React from 'react';
//import TimeOfDay from './TimeOfDay'
import Oneshot from './Oneshot';

function Bio(props) {
    return (
        <div className="bio-box" >
            <Oneshot link={props.url}/>
                <div className = 'bio-text'>
                    <p>{props.name} /</p>
                    <p>{props.location}</p>
                    {/*<TimeOfDay />*/}
                </div>
            
        </div>
    );
}

export default Bio;
