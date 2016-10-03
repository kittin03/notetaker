import React, { Component } from 'react';

class Search extends Component {
  // React is taking any property on React History module object that's adding it to 'this'
  mixins: [Router.History]
  getRef(ref) {
    this.usernameRef = ref;
  }
  handleSubmit() {
    // after clicking submit - go, grab username and take them to profile/whatever
    const username = this.userNameRef.value;
    this.usernameRef.value = '';
    this.history.pushState(null, "profile/" + username)
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;
