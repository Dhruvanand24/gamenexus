import axios from 'axios';


const baseURL = 'https://api.rawg.io/api'; 


const axiosInstance = axios.create({
  baseURL,
});

export const fetchData = async (endpoint, params = {}) => {
  
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    // Handle errors here, you might want to log or display an error message
    console.error('Error fetching data:', error);
    throw error;
  }
};
