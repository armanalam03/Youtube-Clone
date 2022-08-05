import React, { useState } from 'react';  
import './App.css';
/* import { Grid } from '@material-ui/core'; */
import youtube from './api/youtube';

import SearchBar from './components/SearchBar';
import HomeVideos from './components/HomeVideos';
import SearchContainer from './components/SearchContainer';
import PageviewIcon from '@mui/icons-material/Pageview';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import VideoPlayer from './components/VideoPlayer';
// import VideoList from './components/VideoList';
// import VideoDetail from './components/VideoDetail';
// import ToggleSwitch from './components/ToggleSwitch';

class App extends React.Component {

  state = {
    loadVideos: [],
    isloaded: false,
    searchVideos: [],
    selectedVideo: null,
    selectedVideoTag: null,
    selectedVideoId: null,
  }

  onload = async() => {
    const loadedData = await youtube.get('videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 5,
        regionCode: 'IN',
        key: 'AIzaSyCHzx2bGfVoryG6_YaPWxTWBlMqXzeAhAc',
    }
    });
    // console.log(loadedData.data);
    this.setState({ loadVideos: loadedData.data.items, isloaded: true });
  }

  /* state = {
    videos: [],
    selectedVideo: null,
  }

  onVideoSelect = ( video ) => {
    this.setState({ selectedVideo: video });
  }*/

  onVideoSelect = ( video ) => {
    this.setState({ selectedVideo: video });
    // console.log(video);
    // this.setState({ selectedVideoTag: video.snippet.tags[0]});
    this.setState({ selectedVideoId: video.id});
  }

  onlistVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    // console.log(video);
    // this.setState({ selectedVideoTag: video.snippet.tags[0]});
    this.setState({ selectedVideoId: video.id.videoId});
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCHzx2bGfVoryG6_YaPWxTWBlMqXzeAhAc',
        q: searchTerm,
    }
    });
    // console.log(response);
    this.setState({ searchVideos: response.data.items /*, selectedVideo: response.data.items[0] */});
  }

  render (){
    // const { selectedVideo } = this.state;
    // const { videos } = this.state;
    // const { searchVideos } = this.state;
    const { loadVideos } = this.state;
    const { searchVideos } = this.state;
    const { selectedVideo } = this.state;
    const { selectedVideoTag } = this.state;
    const { selectedVideoId } = this.state;

    if(this.state.isloaded==false){
      this.onload();
    }
   return(
    <BrowserRouter>
      <div className="page-container">
        <div className="navbar">
          <Link to="/" exact>
          <div className="svg-container">
            <img src={require('./youtube_white.png')} alt="youtube icon" className="yt-icon" />       
          </div>
          </Link>
          <div className="searchbar-container">
            <SearchBar onFormSubmit={this.handleSubmit} />
            {/* <PageviewIcon sx={{ fontSize: "45px" }} onClick={this.handleSubmit}/> */}
          </div>
          <div className="nav-right"></div>
        </div>
        <div className="dynamic-container">
          {/* <VideoDetail video={selectedVideo} className="video-details" />
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} className="video-list" /> */}
        <Routes>
          <Route path="/" element={<HomeVideos videos={loadVideos} onVideoSelect={this.onVideoSelect} exact/>} />
          <Route path="/search" element={<SearchContainer videos={searchVideos} />} exact/>
          <Route path="/player" element={<VideoPlayer selectedVideo={selectedVideo} /* selectedVideoTag={selectedVideoTag} */ selectedVideoId={selectedVideoId} onlistVideoSelect={this.onlistVideoSelect}/>} />
        </Routes>
          
        </div>
      </div>
    </BrowserRouter>
   )
  }
}

export default App;