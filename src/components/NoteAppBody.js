import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteAppBody({ notes, addNote, onSubmit, onDelete, onArchive }) {
  const activeNotes = notes.filter(note => note.archived === false);
  const archivedNotes = notes.filter(note => note.archived === true);
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} onSubmit={onSubmit} />
      <h2>Active Notes</h2>
      <NotesList
      notes={activeNotes}
      onDelete={onDelete}
      onArchive={onArchive}
      />
      <h2>Archived Notes</h2>
      <NotesList
      notes={archivedNotes}
      onDelete={onDelete}
      onArchive={onArchive}
      />
    </div>
  );
}

export default NoteAppBody;
