import React, { Component } from 'react';
import { Router } from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

class Profile extends Component {
  // TODO: refactor mixin
  mixins: [ReactFireMixin]
  constructor() {
    super();
    this.state = {
      notes: [1, 2, 3, 4],
      bio: {
        name: 'Tyler Durden'
      },
      repos: ['a', 'b', 'c']
    }
  }
  componentDidMount() {
    this.ref = new Firebase('https://notetaker-2-59ab3.firebaseio.com/');
    // need to get properties for particular user
    // this.ref.child - take ref to user and go deeper
    var childRef = this.ref.child(this.props.params.username)
    // bind specific username endpoint in FB and pass property on a state
    // that we want to bind to - notes
    this.bindAsArray(childRef, 'notes');
  }
  // removes listener, so the state won't update when the component is down
  componentWillUnmount() {
    this.unbind('notes');
  }
  handleAddNote(newNote) {
    // update firebase with the new note
    // whatever we pass into set() is going to replace data in this.state.notes.length
    // appends newNote to the end of the Firebase
    this.ref.child(this.props.params.username)
      .child(this.state.notes.length)
      .set(newNote)
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
        {/* we need to get repos: [] from constructor down to DisplayRepos component */}
          {/* <DisplayRepos childRepos={this.state.repos} /> */}
          <UserProfile username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username}
            repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
}

export default Profile;
