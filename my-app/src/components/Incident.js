import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { format } from 'date-fns';

const Incident = ({ data }) => {
  const createdDate = new Date(data.created);
  const formattedDate = format(createdDate, 'dd.MM.yyyy');
  const formattedTime = createdDate.toLocaleTimeString([], { hour12: false }).slice(0, 5);

  return (
    <View style={styles.card}>
      <Text accessibilityLabel="title" style={styles.titleText}>Title: {data.title}</Text>
      <Text accessibilityLabel="description">Description: {data.description}</Text>
      <Text accessibilityLabel="feedback">Feedback: {data.feedback}</Text>
      <Text accessibilityLabel="created">Created: {formattedDate} - {formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    ...Platform.select({
      android: {
        elevation: 4, // Add shadow on Android
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  titleText: {
    fontWeight: 'bold',
  },
});

export default Incident;
