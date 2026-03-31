import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "./components/button";
import { Input } from "./components/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState<any[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await AsyncStorage.getItem("usuarios");
      if (data) {
        setUsuario(JSON.parse(data));
      }
    }
    loadUsers();
  }, []);

  function handleLogin() {
    const user = usuario.find((u) => u.email === email && u.senha === senha);
    if (user) {
      router.push("/dashboard");
    } else {
      alert("Email ou senha incorretos");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>logue com seu usuario por favor</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Cadrastrar" onPress={() => router.push("/register")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  whiteText: {
    color: "white",
    fontSize: 26,
  },
  input: {
    width: "10%",
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#334155",
  },
});
