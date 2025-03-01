import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold">{vehicle.name}</h3>
      <p className="text-gray-600">Type: {vehicle.type}</p>
      <p className="text-green-600 font-bold">
        Rent: ${vehicle.rent_per_day}/day
      </p>
      <Link
        to={`/rent/${vehicle.id}`}
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded block text-center"
      >
        Rent Now
      </Link>
    </div>
  );
};

export default VehicleCard;
