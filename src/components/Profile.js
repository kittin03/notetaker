import React, { Component } from 'react';
import { Router } from 'react-router';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: 'Tyler Durden'
      },
      repos: ['a', 'b', 'c']
    }
  }
  render () {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
        {/* we need to get repos: [] from constructor down to DisplayRepos component */}
          {/* <DisplayRepos childRepos={this.state.repos} /> */}
          <UserProfile username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
}

export default Profile;
