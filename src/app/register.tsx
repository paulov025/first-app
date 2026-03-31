import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  async function handleRegister() {
    const data = await AsyncStorage.getItem("usuarios");
    const usuarios = data ? JSON.parse(data) : [];
    const newUser = { email, senha };
    usuarios.push(newUser);
    await AsyncStorage.setItem("usuarios", JSON.stringify(usuarios));
    Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "20%",
    height: 50,
    borderWidth: 1,
    padding: 10,
  },
});
