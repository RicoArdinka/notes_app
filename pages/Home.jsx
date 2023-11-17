import NoteList from "../src/components/NotesList";

function Home({ notes, handleSearch, handleDelete }) {
  console.log(notes);
  return (
    <NoteList
      notes={notes}
      handleSearch={handleSearch}
      handleDelete={handleDelete}
    />
  );
}

export default Home;
