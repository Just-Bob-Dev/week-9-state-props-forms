import React, { Component } from 'react';


//builds each instance of a playListItem for the PlayList application.
export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
  }




  render() {
    let songsFromPeople = this.props.songs.map((song) => {
      return (
        <div className="card ">
          <div className="card-block">
            <h4 className="card-title">User: {song.userName}</h4>
            <h4 className="card-title">Artist/Band: {song.songArtist}</h4>
            <h4 className="card-title">Title: {song.songTitle}</h4>
            <h4 className="card-title">Notes: {song.songNotes}</h4>
          </div>
        </div>
      )
    });
    return (
      <div>
        {songsFromPeople}
      </div>
    )
  }

}
