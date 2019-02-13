import React from 'react';

function Header(props) {
    return (
        <div className="header" >
            <h3>{props.title}{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Header;
