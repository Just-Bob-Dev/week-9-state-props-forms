import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      userName: "",
      songArtis: "",
      songTitle: "",
      songNotes: "",
    }
  }

  handleChange(e) {
    let property = e.target.name;
    this.setState({property: e.target.value});
  }

  addToList(e) {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div className="form_container">
        <form onSubmit={this.addToList}>
          <div className="form-group">
            <label>User Name:</label>
            <input type="text" name="userName" onChange={this.handleChange} className="form-control" id="user" placeholder="Name or User Name" value={this.state.userName}/>
          </div>
          <div className="form-group">
            <label>Artist/Band:</label>
            <input type="text" name="songArtist" onChange={this.handleChange} className="form-control" id="artist-band" placeholder="Artist or Band Name" value={this.state.songArtist}/>
          </div>
          <div className="form-group">
            <label for="textarea">Song Title:</label>
            <input type="text" name="songTitle" onChange={this.handleChange} className="form-control" id="user" placeholder="Song Title" value={this.state.songTitle}/>
          </div>
          <div className="form-group">
            <label>Notes about Song</label>
            <textarea class="form-control" onChange={this.handleChange} name="songNotes" id="exampleTextarea" value={this.state.songNotes} rows="3"></textarea>
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}
