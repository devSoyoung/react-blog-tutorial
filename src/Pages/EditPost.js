import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditPost extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: "This is Title",
         content: "This is Content",
      }
   }

   handleChange = (target, e) => (
      this.setState({
         [target]: e.target.value
      })
   )

   render() {
      const { title, content } = this.state;
      const { handleChange } = this;
      return (
         <div>
            <div className="text-center">
               <h3>Edit Post</h3>
               <Link to="/">Go back to Main page</Link>
            </div>

            <div className="mt-3">
               <label><h4>Title</h4></label>
               <input className="form-control" type="text" value={title} 
                  onChange={(e) => handleChange('title', e)} />
            </div>
            <div className="mt-3">
               <label><h4>Contents</h4></label>
               <textarea className="form-control" rows={10} value={content} 
                  onChange={(e) => handleChange('content', e)} />
            </div>
         </div>
      );
   }
}

export default EditPost;