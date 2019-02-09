import React from 'react';
import Oneshot from './Oneshot';
import TimeOfDay from './TimeOfDay'

function Bio(props) {
    return (
        <div className="bio-box" >
            <Oneshot url={props.url} />
            <div className = 'bio-text-container'>
                <h3>{props.name}</h3>
                <TimeOfDay location={props.location} />
            </div>
        </div>
    );
}

export default Bio;
