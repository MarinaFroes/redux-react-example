import React, { Component } from 'react'

class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form action="">
          <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input type="text" name="title" id=""/>
          </div>
          <br />
          <div>
            <label htmlFor="body">Body:</label>
            <br />
            <textarea name="body" id="" cols="30" rows="10"></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
