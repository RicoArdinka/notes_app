import NoteList from "../src/components/NotesList";
import { useState, useEffect } from "react";
import { getNotes } from "../utils/network";

function Home() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    const coba = await getNotes();
    setNotes(coba.data);
  };

  useEffect(() => {
    getData();
  }, [notes]);

  return (
    <NoteList
      notes={
        Array.isArray(notes) &&
        notes.filter((note) => note.title?.toLowerCase().includes(searchText))
      }
      handleSearch={setSearchText}
    />
  );
}

export default Home;
