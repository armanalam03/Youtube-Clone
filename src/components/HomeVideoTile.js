import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom' 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function HomeVideoTile({ video, onVideoSelect }) {
  return (
    <Link to="/player" onClick={() => onVideoSelect( video )} style={{ textDecoration: 'none' }}>
    <div className="home-video-tile" /*onClick={() => onVideoSelect( video )}*/ /* onClick={() => console.log(video)} */ >
        <img src={video.snippet.thumbnails.medium.url} alt="home thumbnail" className="home-video-thumb" />
        <div className="home-video-tile-bottom">
            <AccountCircleIcon fontSize="large" className="channelIcon" />
            <div className="title-details">
                <span className="home-video-tile-title">
                    {video.snippet.title}
                </span>
                <span className="home-video-tile-channel">
                {video.snippet.channelTitle}
                </span>
                <span className="home-video-tile-view-count">
                    {video.statistics.viewCount} • views
                </span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default HomeVideoTile;