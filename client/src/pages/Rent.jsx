import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getVehicles, rentVehicle } from "../api/api";
import RentForm from "../components/Rentform";
import { useSelector } from "react-redux";

const Rent = () => {
  const user = useSelector((state) => state.account.account);
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getVehicles()
      .then((res) => {
        const selectedVehicle = res.data.find((v) => v.id === parseInt(id));
        setVehicle(selectedVehicle);
      })
      .catch(console.error);
  }, [id]);

  const handleRentalSubmit = async (rentalData) => {
    try {
      await rentVehicle({
        user_id: user.id,
        vehicle_id: id,
        start_date: rentalData.startDate,
        end_date: rentalData.endDate,
      });
      alert("Vehicle Rented Successfully!");
      navigate("/");
    } catch (error) {
      alert("Rental Failed. Try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {vehicle ? (
        <RentForm vehicle={vehicle} onSubmit={handleRentalSubmit} />
      ) : (
        <p className="mt-10 text-gray-600">Loading Vehicle...</p>
      )}
    </div>
  );
};

export default Rent;
