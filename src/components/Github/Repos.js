import React from 'react';

const Repos = ({repos}) => (
  <div>
  <h3>repos</h3>
    {repos}
  </div>
);

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos;
