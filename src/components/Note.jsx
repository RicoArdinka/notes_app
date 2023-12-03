import { MdDeleteForever } from "react-icons/md";
import { deleteNote } from "../../utils/network";

function Note({ id, judul, text, date }) {
  const deletedNote = async (id) => {
    const deleted = await deleteNote(id);
    return deleted;
  };

  return (
    <div className="note bg-black bg-opacity-25 text-white rounded-md p-4 min-h-[170px] flex flex-col justify-between">
      <h1 className="text-lg font-semibold italic mb-1.5">{judul}</h1>
      <span className="font-serif">{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <button>
          <MdDeleteForever
            onClick={() => deletedNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </button>
      </div>
    </div>
  );
}

export default Note;
