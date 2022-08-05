import React from 'react'
import '../App.css'
import HomeVideoTile from './HomeVideoTile';

function HomeVideos({ videos, onVideoSelect }) {
    const tileOfVideos = videos.map((video, id) => <HomeVideoTile onVideoSelect={onVideoSelect} key={ id } video={ video } />)
    // const tileOfVideos = loadVideos.map((video, id));
  return (
    <div className="home-videos">
        {tileOfVideos}
    </div>
  )
}

export default HomeVideos;