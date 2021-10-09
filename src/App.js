import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList';
import Search from './components/Search';

function App() {
  const [note, setNote] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [activeNote, setActiveNote] = useState();

  // Fetching Data from local storage using provided key
  useEffect(() => {
    const notesFetchedData = JSON.parse(localStorage.getItem('notes-data'));
    if (notesFetchedData) {
      setNote(notesFetchedData);
    }
  }, []);

  // Adding Data to local storage as key-value pair
  useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(note))
  }, [note]);


  //Adding new note
  const addNote = (text) => {
    console.log(text);
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString()
    }
    const newNotes = [...note, newNote];
    setNote(newNotes)
  }

  //Fetching Id of note which user wants to update
  const updateNote = (id) => {
    const editNote = note.find((note) => {
      return note.id === id;
    })
    setActiveNote(editNote)
  }

  //Printing note details on console if user clicked on update button
  activeNote ? console.log(activeNote) : console.log()

  //Deleting note based on id
  const deleteNote = (id) => {
    const newNotes = note.filter((note) => note.id !== id);
    setNote(newNotes)
  }

  return (
    <div className="container">
      <h1>Notes Management</h1>
      <Search handleSearch={setSearchText} />
      <NoteList
        //Providing filtered notes based on search input
        note={note.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleUpdateNote={updateNote}
      />
    </div>
  );
}

export default App;
