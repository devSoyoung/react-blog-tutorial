import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
   render() {
      return (
         <div>
            <div className="text-center">
               <h2>Post List</h2>
               <Link to="/">Go back to Main page</Link>
            </div>

            <table className="table mt-5 text-center">
               <thead>
                  <th scope="col">#</th>
                  <th scope="col">title</th>
                  <th scope="col">link</th>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">1</th>
                     <td>Sample Post</td>
                     <td><Link to={`/post/${1}`}>View Post</Link></td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

export default PostList;