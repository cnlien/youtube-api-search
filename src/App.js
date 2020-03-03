import React from 'react';
import youtube from './api/youtube';

// COMPONENTS
import { Container } from 'reactstrap';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoList/VideoDetail';

const API_KEY = 'AIzaSyCyGRNevVU3EHfO912ecCoaNapNEN3zhDQ';

class App extends React.Component {
  
  state = {
    videos:[],
    selectedVideo: null
  };

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY,
        q: term,
      }
    });
    
    this.setState({
      videos: res.data.items
    })

  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <SearchBar
            onTermSubmit={this.onTermSubmit}
          />
          
          <VideoDetail
            video={this.state.selectedVideo}
          />
          
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </Container>
      </div>
    );
  }
}

export default App;
