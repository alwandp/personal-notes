import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItem({ title, body, createdAt, id, onDelete, isArchived, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <NoteItemAction id={id} onDelete={onDelete} isArchived={isArchived} onArchive={onArchive} />
    </div>
  )
}

export default NoteItem;
