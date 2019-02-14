import React from 'react';
import Update from '../Components/Feed/Update/Update';

function Header(props) {
    return (
        <div>
            <div className="header" >
                <h3>{props.title} </h3>
            </div>
       
            <Update />
       </div>
    );
}

export default Header;
