import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      done: false,
      title: newTaskTitle,
      id: new Date().getTime(),
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));
    const foundItem = updatedTasks.find((item) => item.id === id);

    if (!foundItem) {
      return;
    } else {
      foundItem.done = !foundItem.done;
      setTasks(updatedTasks);
    }

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />
      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        removeTask={handleRemoveTask}
        toggleTaskDone={handleToggleTaskDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
