import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import WritePost from './Pages/WritePost';
import PostList from './Pages/PostList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app mx-auto" style={{width: '800px'}}>
          <div className="mt-5 card border-primary">
            <div className="card-body">
              <Route path="/write" component={WritePost} />
              <Route path="/list" component={PostList} />
              <Route exact path="/" component={MainPage} />
            </div>
          </div>
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
