import { useState } from "react";
import { MdAccountCircle, MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/network";

function FormLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    login({ username, password }).then((response) => {
      console.log(response);
      if (response) {
        navigate("/");
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-cyan-700 to-slate-400">
      <div className="w-[350px] h-[500px] bg-black bg-opacity-25  flex items-center justify-center shadow-2xl rounded-md">
        <div className="grid gird-cols-1s ">
          <form
            onSubmit={handleLogin}
            className="col-[1_/_span_2] row-[span_1_ /_span_2] flex items-center justify-center flex-col"
          >
            <h2 className="text-[35px] text-[#f0f0f0] mb-10">LOGIN</h2>
            <div className="w-[280px] h-[50px] border-b-[2px] my-[10px] mx-[0px] flex items-center">
              <MdAccountCircle
                size="1.3em"
                className="flex-1 text-center text-[20px] text-[#f0f0f0]"
              />
              <input
                type="text"
                placeholder="Username"
                className="flex-[5_0_0%] border-none outline-none bg-none font-semibold text-[18px] bg-transparent text-[#f0f0f0]"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="w-[280px] h-[50px] border-b-[2px] my-[10px] mx-[0px] flex items-center">
              <MdLockOutline
                size="1.3em"
                className="flex-1 text-center text-[20px] text-[#f0f0f0]"
              />
              <input
                type="password"
                placeholder="Password"
                className="flex-[5_0_0%] border-none outline-none bg-none font-semibold text-[18px] bg-transparent text-[#f0f0f0]"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button
              type="submit"
              className="w-[130px] h-[40px] bg-none outline-none border-2 border-solid border-[#f0f0f0] uppercase text-[18px] font-semibold text-[#f0f0f0] my-[20px] mx-[0px] hover:text-[#f0f0f0] hover:border-none hover:bg-[#00203f] mt-5"
            >
              Login
            </button>
            <p className="text-[14px] text-[#f0f0f0]">
              Belum punya akun? |
              <Link to="/register">
                <u className="text-[#4adede] no-underline hover:text-[#f0f0f0] hover:underline">
                  {" "}
                  Register
                </u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
