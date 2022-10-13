import React, { useState } from 'react'
import Header from './components/Header'
import './styles.css'
//import './stew.css'
import Note from './components/Note'
import CreateArea from './components/CreateArea'

function App(props) {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) =>
  {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  const onUpdate = ({ id, title, content }) => {
    const _notes = [];
    for (let i = 0; i < notes.length; i++) {
      if (i === id) {
        _notes.push({ id, title, content });
      } else {
        _notes.push(notes[i]);
      }
    }
    
    setNotes(_notes);
  };


  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
     <Header></Header>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default App
