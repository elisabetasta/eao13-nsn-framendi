// import React from 'react';
// import { View, Text, StyleSheet, Platform } from 'react-native';
// import { useTranslation } from 'react-i18next';
// import { format } from 'date-fns';

// const Incident = ({ data }) => {
//   const { t } = useTranslation();

//   const createdDate = new Date(data.created);
//   const formattedDate = format(createdDate, 'dd.MM.yyyy');
//   const formattedTime = createdDate.toLocaleTimeString([], { hour12: false }).slice(0, 5);
  
//   let feedback_type = "";
//   let backgroundColor = "";

//   if (data.feedback_id === 1) {
//     feedback_type = "positive";
//     backgroundColor = '#4CD964';
//   }
//   else if (data.feedback_id === 2) {
//     feedback_type = "neutral";
//     backgroundColor = '#FFCC00';
//   }
//   else if (data.feedback_id === 3) {
//     feedback_type = "negative";
//     backgroundColor = '#FF3B30';
//   }

//   return (
//     <View style={styles.card}>
//         <Text accessibilityLabel="title" style={styles.titleText}>{t('Title')}: {data.title}</Text>
//         <Text accessibilityLabel="description">{t('Description')}: {data.description}</Text>
//         <Text accessibilityLabel="feedback">{t('Feedback')}: {feedback_type}</Text>
//         <Text accessibilityLabel="created">{t('Created')}: {formattedDate} kl. {formattedTime}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor,
//     borderRadius: 8,
//     margin: 8,
//     padding: 16,
//     ...Platform.select({
//       android: {
//         elevation: 4, // Add shadow on Android
//       },
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//       },
//     }),
//   },
//   titleText: {
//     fontWeight: 'bold',
//   },
// });

// export default Incident;

import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

const Incident = ({ data }) => {
  const { t } = useTranslation();

  const createdDate = new Date(data.created);
  const formattedDate = format(createdDate, 'dd.MM.yyyy');
  const formattedTime = createdDate.toLocaleTimeString([], { hour12: false }).slice(0, 5);
  
  let feedback_type = "";
  let backgroundColor = "";

  if (data.feedback_id === 1) {
    feedback_type = "positive";
    backgroundColor = '#4CD964';
  }
  else if (data.feedback_id === 2) {
    feedback_type = "neutral";
    backgroundColor = '#FFCC00';
  }
  else if (data.feedback_id === 3) {
    feedback_type = "negative";
    backgroundColor = '#FF3B30';
  }

  return (
    <View style={{
      backgroundColor, // Use the dynamic background color here
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
    }}>
      <Text accessibilityLabel="title" style={styles.titleText}>{t('Title')}: {data.title}</Text>
      <Text accessibilityLabel="description">{t('Description')}: {data.description}</Text>
      <Text accessibilityLabel="feedback">{t('Feedback')}: {feedback_type}</Text>
      <Text accessibilityLabel="created">{t('Created')}: {formattedDate} kl. {formattedTime}</Text>
      {/* <Text accessibilityLabel="created">{t('Created')}: {formattedDate} kl. {formattedTime}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
  },
});

export default Incident;
