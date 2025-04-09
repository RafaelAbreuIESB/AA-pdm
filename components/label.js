import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = ({ text }) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Label;
