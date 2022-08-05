import React from 'react';
import '../App.css';

const VideoDetail = ({ video }) => {
    // if(!video) return <div>Loading....</div>
    let videoSrc = null;
    if(video.id.videoId){
        videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    }else if(video.id){
        videoSrc = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    }

    /* const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(video) */

    return(
        <div className="video-details-container">
            <div className="video-container">
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} allow='autoplay' allowFullScreen />
            </div>
            <div className="description-container">
                <p className="video-title">
                    {video.snippet.title} - {video.snippet.channelTitle}
                </p>
                <p className="video-description">
                    {video.snippet.description}  
                </p>
            </div>
        </div>
    )
}

export default VideoDetail; 