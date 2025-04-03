import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getCoffees = async (category) => {
  const response = await axios.get(`${API_URL}/coffees?category=${category}`);
  return response.data;
};

export const getCoffeeById = async (id) => {
  const response = await axios.get(`${API_URL}/coffees/${id}`);
  return response.data;
};
