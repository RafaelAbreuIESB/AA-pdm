import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import Label from "./components/label";
import UserList from "./components/UserList";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);

  const handleRegister = () => {
    if (name && phone) {
      setUsers([...users, { name, phone }]);
      setName("");
      setPhone("");
    } else {
      alert("Por favor, preencha todos os campos.");
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
        placeholderTextColor="#ccc"
      />

      <Label text="Telefone:" />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Digite seu telefone"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
      />

      <Button title="Cadastrar" onPress={handleRegister} color="#85685a" />

      <UserList users={users} />
      <View style={styles.rodape}><Text style={styles.textoRodape}>Desenvolvido por: Iago De Souza Gomes - 2312130087  e Rafael Augusto Santos Abreu - 2312130113</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#fff",
  },
  rodape:{
    marginTop: 30,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'e0deab',
    alignItems: 'center',
    backgroundColor: '#85685a',
    justifyContent: 'center',
    width: '100%'
  },

  textoRodape:{
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic'
  }
});
