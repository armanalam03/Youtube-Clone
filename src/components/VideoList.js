import React from 'react';
/* import { Grid } from '@material-ui/core'; */
import VideoItem from './VideoItem';
import '../App.css';

const VideoList = ({ videos, onlistVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onlistVideoSelect={onlistVideoSelect} key={ id } video={ video }/>);
    return (
        <div className="video-list-container">
            {listOfVideos}
        </div>
    )
}

export default VideoList;