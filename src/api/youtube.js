import axios from 'axios'

const KEY = 'AIzaSyCCU5mNqJP80n6phDlDUxTJAd0pLE3zMGo';

export default axios.create({
    baseURL:"http://googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
})