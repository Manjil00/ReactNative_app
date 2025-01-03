import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      {/* Add your services content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Services;
