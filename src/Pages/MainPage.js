import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="/write">Write Post</Link></li>
               <li><Link to="/post">Post List</Link></li>
            </ul>
         </div>
      );
   }
}

export default MainPage;