import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet,contentDetails,statistics',
        maxResults: 100,
        key: 'AIzaSyCHzx2bGfVoryG6_YaPWxTWBlMqXzeAhAc'
    }
})