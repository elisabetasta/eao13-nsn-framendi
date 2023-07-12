import React from 'react';
import { View, Text } from 'react-native';

const Incident = ({ data }) => {
    return (
      <View>
        <Text>Title: {data.title}</Text>
        <Text>Description: {data.description}</Text>
        <Text>Feedback: {data.feedback}</Text>
        <Text>Created: {data.created}</Text>
      </View>
    );
  };
  
  export default Incident;
  