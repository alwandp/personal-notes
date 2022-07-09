import React from 'react';

function ArchiveButton({ id, isArchived, onArchive }) {
  return (isArchived) ? (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Unarchive
    </button>
  )
  : (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Archive
    </button>
  )
}

export default ArchiveButton;
