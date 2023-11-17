import { MdSearch } from "react-icons/md";

function Search({ handleSearch }) {
  return (
    <div className="flex items-center bg-slate-200 rounded-[10px] p-[5px] mb-[1.5em]">
      <MdSearch size="1.3em" />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        placeholder="Search..."
        className="border-none bg-slate-200 focus:outline-none ml-2"
      />
    </div>
  );
}

export default Search;
