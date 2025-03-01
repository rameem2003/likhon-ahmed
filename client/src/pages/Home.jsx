import { useEffect, useState } from "react";
import { getVehicles } from "../api/api";
import VehicleCard from "../components/VehicleCard";

const Home = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getVehicles()
      .then((res) => setVehicles(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center my-6">
          Available Vehicles
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
