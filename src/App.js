import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainPage from './Pages/MainPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>React Blog Tutorial</h1>
          <MainPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
