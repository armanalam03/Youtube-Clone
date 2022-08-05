import React from 'react';
// import { Paper, Grid, Typography } from '@material-ui/core';
import '../App.css';

const videoItem = ({ video, onlistVideoSelect }) => {
    return(
        <div className="video-item-container" onClick={() => onlistVideoSelect( video )}>
            {/* <img src={video.snippet.thumbnails.medium.url} className="thumbnail" /> */}
            <div className="video-item-details">
                <span className="video-item-title">
                    {video.snippet.title}
                </span>
                <span className="video-item-channel">
                    {video.snippet.channelTitle}
                </span>
                <span className="video-item-views">
                    {/* {video.statistics.viewCount} • views */}
                </span>
            </div>
            
        </div>
    )
}

export default videoItem;