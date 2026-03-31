import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "./components/button";
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Logado com sucesso!</Text>

      <Button title="Sair" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 20,
  },
});
