import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Incident = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text accessibilityLabel="title" style={styles.titleText}>{data.title}</Text>
      <Text accessibilityLabel="description">Description: {data.description}</Text>
      <Text accessibilityLabel="feedback">Feedback: {data.feedback}</Text>
      <Text accessibilityLabel="created">Created: {data.created}</Text>
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
