import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import NoteAdd from "../pages/NoteAdd";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { getAccessToken } from "../utils/network";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuthLogin() {
  let auth = getAccessToken();
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AuthLogin />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<NoteAdd />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
