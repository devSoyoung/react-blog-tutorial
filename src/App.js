import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import WritePost from './Pages/WritePost';
import PostList from './Pages/PostList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/write" component={WritePost} />
          <Route path="/list" component={PostList} />
          <Route exact path="/" component={MainPage} />
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
