import Note from "./Note";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function NotesList({ notes, handleSearch, handleDelete }) {
  const navigate = useNavigate();
  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className="grid gap-4 grid-cols-4">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            judul={note.judul}
            text={note.text}
            date={note.date}
            handleDelete={handleDelete}
          />
        ))}

        <div className="mx-auto my-auto">
          <button
            onClick={() => navigate("/add-note")}
            className="text-white bg-blue-600 hover:bg-blue-700 border-none rounded-[50px] px-5 py-2.5 "
          >
            + Tambah Note
          </button>
        </div>
      </div>
    </>
  );
}

export default NotesList;
