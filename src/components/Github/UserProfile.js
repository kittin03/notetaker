import React from 'react';

const UserProfile = ({bio, username}) => (
  <div>
    <h3>User Profile</h3>
    <p>Username: {username}</p>
    <p>Bio: {bio.name}</p>
  </div>
);

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile;
