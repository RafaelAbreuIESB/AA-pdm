import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UserList = ({ users }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.column}>Nome</Text>
        <Text style={styles.column}>Telefone</Text>
      </View>
      {users.map((user, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.column}>{user.name}</Text>
          <Text style={styles.column}>{user.phone}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    maxHeight: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 5,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  column: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
  },
});

export default UserList;
