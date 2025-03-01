import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router";
import { useDispatch } from "./../../node_modules/react-redux/src/hooks/useDispatch";
import { AccountReducer } from "../redux/features/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      console.log(res);
      dispatch(AccountReducer(res.data.user));
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 shadow-md rounded-lg w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded mt-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded mt-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full mt-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
