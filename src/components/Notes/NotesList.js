import React from 'react';

const NotesList = ({notes}) => (
    <ul className="list-group">
      {notes.map((note, i) => (
        <li className="list-group-item" key={i}>{note}</li>
      ))}
    </ul>
  )

export default NotesList;
