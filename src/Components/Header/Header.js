import React from 'react';
import Update from '../Feed/Update/Update';

function Header(props) {
    return (
        <div>
            <div className="header" >
                <h1>{props.title} </h1>
            </div>
       
            <Update />
       </div>
    );
}

export default Header;
