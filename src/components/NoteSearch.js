import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(e) {
    this.setState(prevState => {
      return {
        ...prevState,
        title: e.target.value,
      }
    });
    this.props.onSearch({ title: e.target.value });
  }

  render() {
    return (
      <div className="note-search">
        <input
        type="text"
        placeholder="Search note..."
        value={this.state.title}
        onChange={this.onSearchHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
