import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function NoteItemAction({ id, onDelete, isArchived, onArchive }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} isArchived={isArchived} onArchive={onArchive} />
    </div>
  );
}

export default NoteItemAction;
