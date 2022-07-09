import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    if (e.target.value.length <= 50) {
      this.setState(prevState => {
        return {
          ...prevState,
          title: e.target.value,
        }
      });
    }
  }

  onBodyChangeHandler(e) {
    this.setState(prevState => {
      return {
        ...prevState,
        body: e.target.value,
      }
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state)
  }

  render() {
    const charLeft = 50 - this.state.title.length;

    return (
      <div className="note-input">
        <h2>Add Note</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">Char left: {charLeft}</p>
          <input 
          className="note-input__title"
          type="text"
          placeholder="Add title ..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          required
          />
          <textarea
          className="note-input__body"
          type="text"
          placeholder="Add notes ..."
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
          required>
          </textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
