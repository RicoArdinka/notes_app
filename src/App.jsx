import NotesList from "./components/NotesList";
import Header from "./components/Header";

function App() {
  const notes = [
    {
      id: 1,
      judul: "First Note",
      text: "This is my first note",
      date: "01/11/2023",
    },
    {
      id: 2,
      judul: "Second Note",
      text: "This is my second note",
      date: "02/11/2023",
    },
    {
      id: 3,
      judul: "Third Note",
      text: "This is my third note",
      date: "03/11/2023",
    },
    {
      id: 4,
      judul: "Fourth Note",
      text: "This is my fourth note",
      date: "04/11/2023",
    },
  ];
  return (
    <div className="container max-w-[960px] mx-auto px-[15px]">
      <Header />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
