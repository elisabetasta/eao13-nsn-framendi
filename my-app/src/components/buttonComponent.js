import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = () => {
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
        console.log("fetched data check ", responseData)
        // hér þarf að tengja svo hægt sé að birta í viðmótinu.
      })
      .catch((error) => {
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
        {isLoading ? 'Loading...' : 'Fetch Data'}
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
