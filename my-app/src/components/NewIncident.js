import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const NewIncident = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');

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

  const handleFeedbackSelection = (selectedFeedback) => {
    setFeedback(selectedFeedback);
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
      <View style={styles.feedbackContainer}>
        <TouchableOpacity
          style={[
            styles.feedbackOption,
            feedback === 'positive' && styles.feedbackOptionSelected,
            feedback === 'positive' && styles.positive,
          ]}
          onPress={() => handleFeedbackSelection('positive')}
        >
          <Text style={styles.feedbackText}>Positive</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.feedbackOption,
            feedback === 'neutral' && styles.feedbackOptionSelected,
            feedback === 'neutral' && styles.neutral,
          ]}
          onPress={() => handleFeedbackSelection('neutral')}
        >
          <Text style={styles.feedbackText}>Neutral</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.feedbackOption,
            feedback === 'negative' && styles.feedbackOptionSelected,
            feedback === 'negative' && styles.negative,
          ]}
          onPress={() => handleFeedbackSelection('negative')}
        >
          <Text style={styles.feedbackText}>Negative</Text>
        </TouchableOpacity>
      </View>
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
  feedbackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  feedbackOption: {
    flex: 1,
    height: 30, // Adjust the height as needed
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackOptionSelected: {
    borderWidth: 2,
    borderColor: 'black',
  },
  feedbackText: {
    fontSize: 16, // Adjust the font size as needed
    fontWeight: 'bold',
  },
  positive: {
    backgroundColor: '#4CD964', // Green-ish color
  },
  neutral: {
    backgroundColor: '#FFCC00', // Orange-ish color
  },
  negative: {
    backgroundColor: '#FF3B30', // Red-ish color
  },
});

export { NewIncident };
