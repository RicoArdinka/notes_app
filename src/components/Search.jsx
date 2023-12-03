import { MdSearch } from "react-icons/md";

function Search({ handleSearch }) {
  return (
    <div className="flex items-center bg-black bg-opacity-30 rounded-[10px] p-[5px] mb-[1.5em]">
      <MdSearch size="1.3em" className="text-white" />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        placeholder="Search..."
        className="flex-[5_0_0%] border-none bg-transparent focus:outline-none ml-2 text-white"
      />
    </div>
  );
}

export default Search;
