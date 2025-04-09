import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Label from './components/label';
import UserList from './components/UserList';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);

  const handleRegister = () => {
    if (name && phone) {
      setUsers([...users, { name, phone }]);
      setName('');
      setPhone('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <Label text="Nome:" />
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />

      <Label text="Telefone:" />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Digite seu telefone"
        keyboardType="phone-pad"
      />

      <Button title="Cadastrar" onPress={handleRegister} color="#4CAF50" />

      <UserList users={users} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
