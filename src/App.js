import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      //by default basename = '/'
      //then all your request are started form  /my-app
      // <BrowserRouter basename='/my-app'>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
