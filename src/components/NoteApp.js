import React from 'react';
import { getInitialData } from '../utils';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: [],
    }

    this.onSearchByTitleHandler = this.onSearchByTitleHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onSearchByTitleHandler(keyword) {
    const title = keyword.title.toLowerCase();
    this.setState({ query: title });
  }

  onAddNoteHandler({ title, body }) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        if (note.archived) {
          return {
            ...note,
            archived: false,
          }
        } else {
          return {
            ...note,
            archived: true,
          }
        }
      }
      return note;
    })
    this.setState({ notes });
  }

  render() {
    const notesFiltered = this.state.notes.filter(note => {
      if (this.state.query === '') {
        return this.state.notes;
      } else {
        return note.title.toLowerCase().includes(this.state.query);
      }
    })
    return (
      <>
        <NoteAppHeader onSearch={this.onSearchByTitleHandler} />
        <NoteAppBody
        notes={notesFiltered}
        addNote={this.onAddNoteHandler}
        onDelete={this.onDeleteHandler}
        onArchive={this.onArchiveHandler}
        /> 
      </>
    );
  }
}

export default NoteApp;
