import { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      alert("Registration Successful! Please log in.");
      navigate("/login");
    } catch (error) {
      alert("Registration Failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded-lg w-96 mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="border p-2 w-full rounded mt-2"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded mt-2"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border p-2 w-full rounded mt-2"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full mt-4 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
