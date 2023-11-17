import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NoteAdd from "../pages/NoteAdd";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      judul: "First Note",
      text: "This is my first note",
      date: "01/11/2023",
    },
    {
      id: nanoid(),
      judul: "Second Note",
      text: "This is my second note",
      date: "02/11/2023",
    },
    {
      id: nanoid(),
      judul: "Third Note",
      text: "This is my third note",
      date: "03/11/2023",
    },
    {
      id: nanoid(),
      judul: "Fourth Note",
      text: "This is my fourth note",
      date: "03/11/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [notesView, setNotesView] = useState([]);

  const addNote = (note) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      judul: note.titleNote,
      text: note.noteText,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    setNotesView(notes);
  }, [notes]);

  return (
    <div className="container max-w-[960px] mx-auto px-[15px]">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              notes={notesView.filter((note) =>
                note.judul.toLowerCase().includes(searchText)
              )}
              handleSearch={setSearchText}
              handleDelete={deleteNote}
            />
          }
        ></Route>
        <Route
          path="/add-note"
          element={<NoteAdd handleAddNote={addNote} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
