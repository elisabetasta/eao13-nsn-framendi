import axios from 'axios';

const API_URL = 'http://localhost:3701/incidents'

// Define a function to fetch the data
const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    // Process the received data
    // console.log("fetchData() ", data)
    return data;
  } catch (error) {
    // Handle any errors
    throw error;
  }
};

export { fetchData };

