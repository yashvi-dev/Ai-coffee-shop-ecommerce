import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getReviews = async (coffeeId) => {
  const response = await axios.get(`${API_URL}/reviews?coffeeId=${coffeeId}`);
  return response.data;
};
