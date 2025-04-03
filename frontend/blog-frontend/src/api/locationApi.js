const API_URL = "https://ipwho.is/";

export const getLocations = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
