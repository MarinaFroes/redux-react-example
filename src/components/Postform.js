import React, { Component } from 'react'

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          </div>
          <br />
          <div>
            <label htmlFor="body">Body:</label>
            <br />
            <textarea name="body" id="" cols="30" rows="10" value={this.state.body} onChange={this.handleChange}></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
