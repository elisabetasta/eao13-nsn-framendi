import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { fetchData } from '../api/api';
import Incident from './Incident';

const IncidentList = () => {
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
  }, []);

  return (
    <View>
      {incidentData.map((incident) => (
        <Incident key={incident.id} data={incident} />
      ))}
    </View>
  );
};

export default IncidentList;
