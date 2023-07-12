import axios from 'axios';

// Define a function to fetch the data
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3700/incidents');
    const data = response.data;
    // Process the received data
    return data;
  } catch (error) {
    // Handle any errors
    throw error;
  }
};

export { fetchData };
