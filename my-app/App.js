import React, { useState } from 'react';
import 'intl-pluralrules';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import IncidentList from './src/components/IncidentList';
import { ButtonComponent } from './src/components/ButtonComponent';
import './src/i18n';
import { useTranslation } from 'react-i18next';
import { NewIncident } from './src/components/NewIncident';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Button, Select } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { theme } from './theme/theme';

export default function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleRefresh = () => {
    setRefreshFlag((prevFlag) => !prevFlag);
  };

  const { t } = useTranslation();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header Component</Text>
        </View>
        <View style={styles.contentContainer}>
          <ButtonComponent title={t('Refresh')} onRefresh={handleRefresh} />
          <NewIncident />
          <ScrollView style={styles.scrollContainer}>
            <IncidentList refreshFlag={refreshFlag} />
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Text>Footer Component</Text>
        </View>
      </View>
      </ApplicationProvider>
    </>


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
  contentContainer: {
    flex: 1,
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
