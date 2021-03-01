import React from 'react';
import './RecomendedVideos.css';
import VideoCard from '../videoCard/VideoCard';



function RecomendedVideos (){
    return(
        <div className="recomendedVideos">
            <h2>Recomended</h2>
            <div className="recomendedVideos__videos">
                <VideoCard/>
            </div>
        </div>
    )
}


export default RecomendedVideos;