import { View, Text, FlatList } from "react-native";
import { s } from "./TasksScreen.style";
import Header from "../../components/Header/Header";
import { useState } from "react";
import TaskTile from "../../components/TaskTile/TaskTile";
import TaskForm from "../../components/TaskForm/TaskForm";

export default function TasksScreen() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "coucou", isCompleted: false },
    { id: 2, title: "salut", isCompleted: true },
    { id: 3, title: "hello", isCompleted: false },
    { id: 4, title: "hi", isCompleted: true },
    { id: 5, title: "yo", isCompleted: true },
  ]);

  function addTask(title) {
    setTasks([...tasks, { id: Date.now(), title: title, isCompleted: false }]);
  }

  function toggleTaskStatus(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      ListHeaderComponent={
        <>
          <Header />
          <TaskForm addTask={addTask} />
        </>
      }
      //   ListFooterComponent={}
      //   contentContainerStyle={{ padding: 20 }}
      //   Flatlist est scrollview + évolué et optimisé pour les longues listes
      //    il necessite une data (tableau de données) et une fonction renderItem (pour rendre chaque élément)
      //    mais aussi une keyExtractor pour donner une clé unique à chaque élément (ici on utilise l'index)
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskTile
          task={item}
          toggleTaskStatus={() => toggleTaskStatus(item.id)}
          deleteTask={() => deleteTask(item.id)}
        />
      )}
    />
  );
}
