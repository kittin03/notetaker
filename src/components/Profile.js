import React, { Component } from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Rebase from 're-base';
import getGithubInfo from '../utils/helpers';

const base = Rebase.createClass('https://notetaker-2-59ab3.firebaseio.com/')

class Profile extends Component {
  // TODO: refactor mixin
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  componentDidMount() {
    // this.ref = new Firebase('https://notetaker-2-59ab3.firebaseio.com/');
    this.init(this.props.params.username);
  }
  // gets invoked whenever Profile receives props
  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    // this.unbind('notes');
    // console.log('the next prop are', nextProps);
    this.init(nextProps.params.username);
  }
  // removes listener, so the state won't update when the component is down
  componentWillUnmount() {
    // this.unbind('notes');
    base.removeBinding(this.ref)
  }
  init(username) {
    // // need to get properties for particular user
    // // this.ref.child - take ref to user and go deeper
    // var childRef = this.ref.child(username);
    // // bind specific username endpoint in FB and pass property on a state
    // // that we want to bind to - notes
    // this.bindAsArray(childRef, 'notes');

    this.ref = base.bindToState(this.props.params.username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
      .then(function(data) {
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
        // makes this same as this outside function
      }.bind(this))
  }
  handleAddNote(newNote) {
    // // update firebase with the new note
    // // whatever we pass into set() is going to replace data in this.state.notes.length
    // // appends newNote to the end of the Firebase
    // this.ref.child(this.props.params.username)
    //   .child(this.state.notes.length)
    //   .set(newNote)
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    })
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
            addNote={(newNote) => this.handleAddNote(newNote)} />
        </div>
      </div>
    )
  }
}

export default Profile;
