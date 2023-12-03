import { useNavigate } from "react-router-dom";
import { logoutAccessToken } from "../../utils/network";

function Header() {
  const navigate = useNavigate();
  function handleLogout() {
    logoutAccessToken();
    navigate("/login");
  }
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-4xl text-white font-medium my-2">Notes</h1>
      <button
        onClick={handleLogout}
        className="text-white bg-blue-900 hover:bg-blue-950 border-none rounded-[50px] px-2.5 py-1"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
