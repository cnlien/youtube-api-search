import React from 'react';
import youtube from './api/youtube';

// COMPONENTS
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoList/VideoDetail';

// STYLING
import "./components/VideoList/videoList.scss";
import { Container } from 'reactstrap';

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
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    })
  }

  componentDidMount() {
    this.onTermSubmit('React Javascript')
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    })
  }

  render() {
    return (
      <Container style={{marginTop:"20px"}}>
          <div className="ui grid">
            <div className="ui row">
              <div className="five wide column">
                <SearchBar
                  onTermSubmit={this.onTermSubmit}
                />

                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>

              <div className="eleven wide column">
                <VideoDetail
                  video={this.state.selectedVideo}
                />
              </div>
            </div>

          </div>
        </Container>
    );
  }
}

export default App;
