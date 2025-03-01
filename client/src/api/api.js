import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = (user) =>
  axios.post(`${API_URL}/auth/register`, user);
export const loginUser = (user) => axios.post(`${API_URL}/auth/login`, user);
export const getVehicles = () => axios.get(`${API_URL}/vehicles/all`);
export const rentVehicle = (rental) =>
  axios.post(`${API_URL}/rentals/book`, rental);
