import React from 'react';
import 'intl-pluralrules';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import IncidentList from './src/components/IncidentList';
import './src/i18n'
import { ButtonComponent } from './src/components/buttonComponent'


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header Component</Text>
        <ButtonComponent />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <IncidentList />
      </ScrollView>
      <View style={styles.footer}>
        <Text>Footer Component</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fgd',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  scrollContainer: {
    flex: 1,
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
});
