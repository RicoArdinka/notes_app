import Note from "./Note";
import Header from "./Header";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function NotesList({ notes, handleSearch, handleDelete }) {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-blue-900 via-cyan-700 to-slate-400">
      <div className="max-w-[950px] mx-auto px-[15px] min-h-screen ">
        <Header />
        <Search handleSearch={handleSearch} />
        <div className="grid gap-4 grid-cols-4">
          {Array.isArray(notes) &&
            notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                judul={note.title}
                text={note.body}
                date={note.createdAt.substring(0, 10)}
                handleDelete={handleDelete}
                notes={notes}
              />
            ))}

          <div className="mx-auto my-auto">
            <button
              onClick={() => navigate("/add-note")}
              className="text-white bg-blue-900 hover:bg-blue-950 border-none shadow-2xl rounded-[50px] px-5 py-2.5 "
            >
              + Tambah Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesList;
