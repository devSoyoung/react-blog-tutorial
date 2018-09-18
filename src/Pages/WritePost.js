import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WritePost extends Component {
   render() {
      return (
         <div>
            <div className="text-center">
               <h2>Write Post</h2>
               <Link to="/">Go back to Main page</Link>
            </div>
            <form autocomplete="off" className="mt-5">
               <div className="form-group">
                  <label htmlFor="title">제목</label>
                  <input className="form-control" id="title" />
               </div>

               <div className="form-group">
                  <label htmlFor="contents">내용</label>
                  <textarea className="form-control" id="contents" rows={10} />
               </div>
               
               <div className="row">
                  <div className="col clearfix">
                     <Link to="/view"><div></div></Link>
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default WritePost;