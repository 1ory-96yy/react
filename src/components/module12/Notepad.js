import React from "react";
import './Notepad.css'

class Notepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notename: '',
      notetext: '',
      noteteg: '',
      searchTag: '',
      NoteList: [],
      searchName: '',
      searchText: '',
      searchTeg: '',
      foundNoteIndex: null
    };
  }
  handleChangeName = (e) => {
    this.setState({ notename: e.target.value });
  };
  handleChangeText = (e) => {
    this.setState({ notetext: e.target.value });
  };
  handleChangeTag = (e) => {
    this.setState({ noteteg: e.target.value });
  };
  handleSave = () => {
    const { notename, notetext, noteteg, NoteList } = this.state;
    const newNote = {
      name: notename,
      text: notetext,
      tag: noteteg
    };
    this.setState({
      NoteList: [...NoteList, newNote],
      notename: '',
      notetext: '',
      noteteg: ''
    });
  };
  handleFindNote = () => {
    const { searchName, searchText, searchTeg, NoteList } = this.state;
    const foundIndex = NoteList.findIndex(note =>
      note.name.toLowerCase().includes(searchName.toLowerCase()) &&
      note.text.toLowerCase().includes(searchText.toLowerCase()) &&
      note.tag.toLowerCase().includes(searchTeg.toLowerCase())
    );
    if (foundIndex !== -1) {
      const note = NoteList[foundIndex];
      this.setState({
        notename: note.name,
        notetext: note.text,
        noteteg: note.tag,
        foundNoteIndex: foundIndex
      });
    } else {
      console.log("Note not found");
      this.setState({ foundNoteIndex: null });
    }
  };
  handleUpdateNote = () => {
    const { notename, notetext, noteteg, NoteList, foundNoteIndex } = this.state;
    if (foundNoteIndex !== null) {
      const updatedList = [...NoteList];
      updatedList[foundNoteIndex] = {
        name: notename,
        text: notetext,
        tag: noteteg
      };
      this.setState({
        NoteList: updatedList,
        notename: '',
        notetext: '',
        noteteg: '',
        foundNoteIndex: null
      });
    }
  };
  handleDeleteNote = () => {
    const { NoteList, foundNoteIndex } = this.state;
    if (foundNoteIndex !== null) {
      const updatedList = [...NoteList];
      updatedList.splice(foundNoteIndex, 1);
      this.setState({
        NoteList: updatedList,
        notename: '',
        notetext: '',
        noteteg: '',
        foundNoteIndex: null
      });
    }
  };
  render() {
    const {
      notename, notetext, noteteg,
      searchTag, NoteList,
      searchName, searchText, searchTeg
    } = this.state;
    const filteredNotes = NoteList.filter(note =>
      note.tag.toLowerCase().includes(searchTag.toLowerCase())
    );
    return (
      <div>
        <div class='create'>
        <h1>Create Note</h1>
        <input
          type="text"
          placeholder="Note Name"
          value={notename}
          onChange={this.handleChangeName}
          class='crinput'
        />
        <input
          type="text"
          placeholder="Note Text"
          value={notetext}
          onChange={this.handleChangeText}
          class='crinput'
        />
        <input
          type="text"
          placeholder="Note Tag"
          value={noteteg}
          onChange={this.handleChangeTag}
          class='crinput'
        />
        <button onClick={this.handleSave} class='crBut'>Save</button>
        </div>


        <input
          type="text"
          placeholder="Search by Tag"
          value={searchTag}
          onChange={(e) => this.setState({ searchTag: e.target.value })}
          class='fIn'
        />

        <ul>
          {filteredNotes.map((note, index) => (
            <li key={index}>
              <p><strong>{note.name}</strong></p>
              <p>{note.text}</p>
              <p>Tag: {note.tag}</p>
            </li>
          ))}
        </ul>


        <div class='find'>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => this.setState({ searchName: e.target.value })}
          class='findIn'
        />
        <input
          type="text"
          placeholder="Search by Text"
          value={searchText}
          onChange={(e) => this.setState({ searchText: e.target.value })}
          class='findIn'
        />
        <input
          type="text"
          placeholder="Search by Tag"
          value={searchTeg}
          onChange={(e) => this.setState({ searchTeg: e.target.value })}
          class='findIn'
        />
        <div class='FBut'>
        <button onClick={this.handleFindNote} class='findBut'>Find Note</button>
        <button onClick={this.handleUpdateNote} class='findBut'>Update Note</button>
        <button onClick={this.handleDeleteNote} class='findBut'>Delete Note</button>
        </div>
        </div>
      </div>
    );
  }
}
export default Notepad;