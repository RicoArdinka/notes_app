import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../../utils/network";

function AddNote() {
  const navigate = useNavigate();
  const charLimit = 200;
  const [noteValue, setNoteValue] = useState({
    titleNote: "",
    noteText: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    if (charLimit - event.target.value.length >= 0) {
      setNoteValue((prevValue) => {
        if (name === "titleNote") {
          return {
            titleNote: value,
            noteText: prevValue.noteText,
          };
        } else if (name === "noteText") {
          return {
            titleNote: prevValue.titleNote,
            noteText: value,
          };
        }
      });
    }
  }

  const handleSaveClick = (event) => {
    event.preventDefault();
    if (
      noteValue.titleNote.trim().length &&
      noteValue.noteText.trim().length > 0
    ) {
      addNote({ title: noteValue.titleNote, body: noteValue.noteText });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-cyan-700 to-slate-400 pt-5">
      <form
        onSubmit={handleSaveClick}
        className="bg-black bg-opacity-20 rounded-md p-4 min-h-[170px] max-w-[950px] shadow-2xl  flex flex-col justify-between mx-auto"
      >
        <h1 className="text-2xl font-mono text-white">
          <center>Add Note</center>
        </h1>
        <label htmlFor="judul" className="text-white">
          Judul Note
        </label>
        <input
          id="judul"
          type="text"
          className="border-none resize-none bg-black bg-opacity-25 text-white focus:outline-none mb-2 py-1 px-2"
          placeholder="Judul Note...."
          name="titleNote"
          value={noteValue.titleNote}
          onChange={handleChange}
        />
        <label htmlFor="isiNote" className="text-white">
          Notes
        </label>
        <textarea
          id="isiNote"
          cols="10"
          rows="8"
          className="border-none resize-none bg-black bg-opacity-25 text-white focus:outline-none px-2"
          placeholder="Isi Note...."
          name="noteText"
          value={noteValue.noteText}
          onChange={handleChange}
        ></textarea>
        <div className="flex items-center justify-between my-2">
          <small className="text-slate-200">
            {charLimit - noteValue.noteText.length} remaining
          </small>
          <button
            className={`text-white ${
              noteValue.titleNote.length && noteValue.noteText.length > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-slate-600 pointer-events-none"
            }  border-none rounded-[50px] px-5 py-2.5`}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
