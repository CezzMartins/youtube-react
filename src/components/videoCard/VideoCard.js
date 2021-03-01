import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({image, title, channel, views, timestamp, userChannel}){
    return(
        <div className="video">
            <img src={image} alt="photo of Video"/>
            <div className="video__info">

            </div>
        </div>
    );
}

export default VideoCard