import React, { useState } from 'react'
import '../App.css'
import youtube from '../api/youtube';
import { Link, useParams, useLocation } from 'react-router-dom'
import SearchContainerTile from './SearchContainerTile'

function SearchContainer({ videos }) {

    /* const [state, setState] = useState({
        videos: [],
        isloaded: false,
    }) */
    /* const state = {
        videos: [],
        isloaded: false,
    } */ 

    /* if(state.isloaded==false){
        onload(searchTerm);
    }

    const onload = async (searchTerm) => {
        const response = await youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 50,
            key: 'AIzaSyDi75vYVtOdtakB8ATN3brzRHHa1yCv7uk',
            q: searchTerm,
        }
        });
        // console.log(response);
        setState({ videos: response.data.items , isloaded: true});
      } */

    console.log(videos);

  return (
    <div className="search-container">
        <div>search Container</div>
        {/* <SearchContainerTile videos={state.videos} /> */}
    </div>
  )
}

export default SearchContainer;

/* class SearchContainer extends React.Component {

    /* const location = useLocation()
    const { searchTerm } = location.state
    console.log(searchTerm);

    state = { 
        videos: [],
        isloaded: false,
    }
    
    

    onload = async (searchTerm) => {
        const response = await youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 50,
            key: 'AIzaSyB_vdGA00h2FiJcgefPG5xhT6DOLxnkVGk',
            q: searchTerm,
        }
        });
        console.log(response);
        this.setState({ videos: response.data.items , isloaded: true});
      }

    render() {

        const {toSearch} = this.props.location;
        const { videos } = this.state;

        console.log(toSearch[0]);

         if(this.state.isloaded==false){
            this.onload(toSearch);
        }

        return (
            <div className="search-container">
                <SearchContainerTile videos={videos} />
            </div>
        );
    }
}
 
export default SearchContainer; */