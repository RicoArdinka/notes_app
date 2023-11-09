import { MdDeleteForever } from "react-icons/md";

function Note({ judul, text, date }) {
  return (
    <div className="note bg-cyan-400 rounded-md p-4 min-h-[170px] flex flex-col justify-between">
      <h1 className="text-lg font-semibold italic mb-1.5">{judul}</h1>
      <span className="font-serif">{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
