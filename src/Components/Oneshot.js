import React from 'react';
//import ReactPlayer from 'react-player'
import Img from 'react-image'


function Oneshot(props) {
    return (
        <div className='video'>
            <Img src={props.link}></Img>
            
            {/*<div className='player-wrapper'>
                <ReactPlayer
                    url='https://vimeo.com/243556536'
                    className='react-player'
                    playing
                    width='100%'
                    height='100%'
                />
             </div>*/}

        </div>
    );
}

export default Oneshot;
