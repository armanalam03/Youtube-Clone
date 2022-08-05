/* import React from 'react';
import '../App.css';

class VideoPlayer extends React.Component {
  render() { 
    return (
      <div>Video player</div>
    );
  }
}
 
export default VideoPlayer; */

import React, {useState} from 'react'
import '../App.css';
import VideoDetail from './VideoDetail';
import VideoItem from './VideoItem';
import VideoList from './VideoList';
import youtube from '../api/youtube';

function VideoPlayer({ selectedVideo,/*  selectedVideoTag, */ selectedVideoId, onlistVideoSelect }) {

  const [state, setState] = useState({
    listVideos: [],
    isloaded: false,
    /* listSelectedVideo: null, */
  })

const onload = async (/* selectedVideoTag */ selectedVideoId) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        relatedToVideoId: selectedVideoId,
        type: "video",
        key: 'AIzaSyCHzx2bGfVoryG6_YaPWxTWBlMqXzeAhAc',
        /* q: selectedVideoTag, */
    }
    });
    console.log(response);
    setState({ listVideos: response.data.items , isloaded: true});
  }

  if(state.isloaded==false){
    onload(/* selectedVideoTag */ selectedVideoId);
  }

  /* const onVideoSelect = (video) => {
    setState({listSelectedVideo: video})
  } */

  return (
    <div className="video-player-container">
      <VideoDetail video={selectedVideo}/>
      <VideoList videos={state.listVideos} onlistVideoSelect={onlistVideoSelect} />
    </div>
  )
}

export default VideoPlayer