import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { fetchData } from '../api/api';
import Incident from './Incident';
import {ButtonComponent} from './ButtonComponent'

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

  const handleRefresh = async () => {
    try {
        const data = await fetchData();
        setIncidentData(data);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <View>
        <ButtonComponent onRefresh={handleRefresh}/>
      {incidentData.map((incident) => (
        <Incident key={incident.id} data={incident} />
      ))}
    </View>
  );
};

export default IncidentList;
