import React from 'react';
import Img from 'react-image'

function Oneshot(props) {
    return (
        <div className='video-container'>
         <Img className ='image-style' src={props.url}></Img>
        
        </div>
    );
}

export default Oneshot;
