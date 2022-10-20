import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { ItemWrapper } from "./ItemWrapper";
import trashIcon from "../assets/icons/trash/trash.png";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  removeTask: (id: number) => void;
  toggleTaskDone: (id: number) => void;
}

export function TasksList({
  tasks,
  removeTask,
  toggleTaskDone,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskButton}
                testID={`button-${index}`}
                onPress={() => toggleTaskDone(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  {item.done && <Icon name="check" size={12} color="#FFF" />}
                </View>

                <Text style={item.done ? styles.taskTextDone : styles.taskText}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              onPress={() => removeTask(item.id)}
            >
              <Image source={trashIcon} />
            </TouchableOpacity>
          </ItemWrapper>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    marginBottom: 4,
    borderRadius: 4,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  taskMarker: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 15,
    alignItems: "center",
    borderColor: "#B2B2B2",
    justifyContent: "center",
  },
  taskText: {
    color: "#666",
    fontFamily: "Inter-Medium",
  },
  taskMarkerDone: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1DB863",
  },
  taskTextDone: {
    color: "#1DB863",
    fontFamily: "Inter-Medium",
    textDecorationLine: "line-through",
  },
});
