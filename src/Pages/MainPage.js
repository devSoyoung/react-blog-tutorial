import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
   render() {
      return (
         <div>
            <h1>React Blog Tutorial</h1>
            <ul>
               <li><Link to="/write">Write Post</Link></li>
               <li><Link to="/list">Post List</Link></li>
            </ul>
         </div>
      );
   }
}

export default MainPage;