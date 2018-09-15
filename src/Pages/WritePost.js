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
            <form className="mt-5">
               <div className="form-group">
                  <label htmlFor="title"><div>제목</div></label>
                  <input className="form-control" id="title" />
               </div>

               <div className="form-group">
                  <label htmlFor="contents"><div>내용</div></label>
                  <textarea className="form-control" id="contents" rows={10} />
               </div>
               
               <div className="row">
                  <div className="col clearfix">
                     <input type="submit" className="btn btn-primary float-right" value="Save" />
                  </div>
               </div>
            </form>
         </div>
      );
   }
}

export default WritePost;