import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState("");

  function handleAddNewTask() {
    if (!task) {
      return;
    }

    setTask("");
    addTask(task);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={task}
        style={styles.input}
        returnKeyType="send"
        onChangeText={setTask}
        selectionColor="#666666"
        placeholderTextColor="#B2B2B2"
        onSubmitEditing={handleAddNewTask}
        placeholder="Adicionar novo todo..."
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={handleAddNewTask}
        testID="add-new-task-button"
      >
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: -28,
    borderRadius: 5,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  input: {
    flex: 1,
    height: 56,
    color: "#666666",
    borderRightWidth: 1,
    paddingHorizontal: 20,
    borderTopLeftRadius: 5,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 5,
    borderRightColor: "#EBEBEB",
  },
  addButton: {
    height: 56,
    alignItems: "center",
    paddingHorizontal: 12,
    borderTopRightRadius: 5,
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderBottomRightRadius: 5,
  },
});
