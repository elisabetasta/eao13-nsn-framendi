import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { fetchData } from '../api/api';
import Incident from './Incident';
import { ButtonComponent } from './ButtonComponent';

const IncidentList = ({ refreshFlag }) => {
  const [incidentData, setIncidentData] = useState([]);

  useEffect(() => {
    const fetchIncidentData = async () => {
      try {
        const data = await fetchData();
        setIncidentData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIncidentData();
  }, [refreshFlag]);

  const handleRefresh = async () => {
    try {
      const data = await fetchData();
      setIncidentData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}> */}
        {/* <ButtonComponent onRefresh={handleRefresh} /> */}
      {/* </View> */}
      <View style={styles.incidentContainer}>
        {incidentData.map((incident) => (
          <Incident key={incident.id} data={incident} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
  },
  buttonContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  incidentContainer: {
    flex: 1,
  },
});

export default IncidentList;
