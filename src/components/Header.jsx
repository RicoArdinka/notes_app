import Search from "./Search";

function Header({ handleSearch }) {
  return (
    <div>
      <h1 className="text-4xl font-medium my-2">Notes</h1>
      <Search handleSearch={handleSearch} />
    </div>
  );
}

export default Header;
