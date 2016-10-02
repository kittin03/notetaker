import React from 'react';
import NotesList from './NotesList';

const Notes = ({notes, username}) => {
  console.log({notes})
return (

  <div>
    <h3>notes for {username}</h3>
    <NotesList notes={notes} />
  </div>
);
}
export default Notes;
