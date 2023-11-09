import Note from "./Note";

function NotesList({ notes }) {
  return (
    <div className="notes-list grid gap-4 grid-cols-4">
      {notes.map((listNote) => (
        <Note
          key={listNote.id}
          id={listNote.id}
          judul={listNote.judul}
          text={listNote.text}
          date={listNote.date}
        />
      ))}
    </div>
  );
}

export default NotesList;
