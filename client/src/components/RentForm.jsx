import { useState } from "react";
import { useSelector } from "react-redux";

const RentForm = ({ vehicle, onSubmit }) => {
  const user = useSelector((state) => state.account.account);

  const [rentalData, setRentalData] = useState({
    name: user.name,
    email: user.email,
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setRentalData({ ...rentalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(rentalData);
  };

  return (
    <form
      className="bg-white p-6 shadow-md rounded-lg w-96"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Rent {vehicle.name}
      </h2>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        className="border p-2 w-full rounded mt-2"
        onChange={handleChange}
        value={rentalData.name}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        className="border p-2 w-full rounded mt-2"
        onChange={handleChange}
        value={rentalData.email}
        required
      />

      <label className="block mt-3">Start Date:</label>
      <input
        name="startDate"
        type="date"
        className="border p-2 w-full rounded"
        onChange={handleChange}
        required
      />

      <label className="block mt-3">End Date:</label>
      <input
        name="endDate"
        type="date"
        className="border p-2 w-full rounded"
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="bg-green-500 text-white p-2 w-full mt-4 rounded"
      >
        Confirm Rental
      </button>
    </form>
  );
};

export default RentForm;
