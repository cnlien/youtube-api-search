import React from 'react';
import { Container } from 'reactstrap';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {

  onTermSubmit =(term)=> {
    console.log(term)
  };

  render() {
    return (
      <div className="App">
        <Container>
          <SearchBar
            onSubmit={this.onTermSubmit}
          />
        </Container>
      </div>
    );
  }
}

export default App;
