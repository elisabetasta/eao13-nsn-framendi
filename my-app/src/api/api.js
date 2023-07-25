import { NativeModules } from 'react-native';
const { PostgreSQL } = NativeModules;

const API_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

// Define a function to fetch the data
const fetchData = async () => {
  try {
    // Establish a connection to the PostgreSQL database
    const client = new PostgreSQL(API_URL);
    await client.connect();

    // Execute your query (replace 'your_table' with your actual table name)
    const res = await client.query('SELECT * FROM incident');
    const data = res.rows;

    // Close the connection
    await client.end();

    // Process the received data
    return data;
  } catch (error) {
    console.log("lína 23 í api.js")
    // Handle any errors
    throw error;
  }
};

export { fetchData };
