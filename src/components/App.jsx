import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(newNote) {
    setNoteList([...noteList, newNote]);
  }

  function deleteNote(id) {
    setNoteList(
      noteList.filter((note, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteFunction={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
