import React from 'react';

const UserProfile = ({bio, username}) => (
  <div>
    <h3>User Profile</h3>
    <p>Username: {username}</p>
    <p>Bio: {bio.name}</p>
  </div>
);

export default UserProfile;
