import React from 'react';
import Oneshot from './Oneshot';
import TimeOfDay from './TimeOfDay';

function Bio(props) {
    return (
        <div className="bio-box" >
            <Oneshot url={props.url} />
            <div className = 'bio-text-container'>
                <p>{props.name}</p>
                <TimeOfDay location={props.location} />
            </div>
        </div>
    );
}

export default Bio;
