import TodoCard from "@/components/TodoCard";
import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TodoCard title="Création de todo" />
      <Button
        title="Liste des tâches"
        onPress={() => router.navigate("/CreateToDo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 32,
  },
});
