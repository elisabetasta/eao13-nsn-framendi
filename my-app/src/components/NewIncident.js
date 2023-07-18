import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NewIncident = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateIncident = async () => {
    

    const incidentData = {
      title,
      description,
      feedback,
    };

    // Send POST request to the backend
    try {
      const response = await fetch('http://localhost:3701/incidents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(incidentData),
      });

      if (response.ok) {
        // Incident created successfully
        alert('Incident created successfully.');
        // Reset input fields
        setTitle('');
        setDescription('');
        setFeedback('');
      } else {
        // Error creating incident
        alert('Failed to create incident. Please try again.');
      }
    } catch (error) {
      console.error('Error creating incident:', error);
      alert('An error occurred. Please try again later.');
    }
  };
 

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create Incident" onPress={handleCreateIncident} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export { NewIncident };