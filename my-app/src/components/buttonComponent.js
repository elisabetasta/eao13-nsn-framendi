import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, onRefresh }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const API_URL = 'http://localhost:3701/incidents' // er líka skilgreint í api.js, ætti bara að vera á einum stað

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        console.log("refresh")
        // hér þarf að tengja svo hægt sé að birta í viðmótinu.
        onRefresh();
      })
      .catch((error) => {
        console.log("error :( ", error.message)
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <TouchableOpacity
      style={[styles.button, isLoading && styles.loadingButton]}
      onPress={fetchData}
      disabled={isLoading}
    >
      <Text style={styles.buttonText}>
        {isLoading ? 'Loading...' : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 4,
    marginVertical: 10,
  },
  loadingButton: {
    opacity: 0.7,
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export { ButtonComponent };
