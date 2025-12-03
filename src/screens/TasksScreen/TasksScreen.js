import { View, Text, FlatList } from "react-native";
import { s } from "./TasksScreen.style";
import Header from "../../components/Header/Header";
import { useState } from "react";
import TaskTile from "../../components/TaskTile/TaskTile";
import TaskForm from "../../components/TaskForm/TaskForm";

export default function TasksScreen() {
  const [tasks, setTasks] = useState([
    { title: "coucou", isCompleted: false },
    { title: "salut", isCompleted: true },
    { title: "hello", isCompleted: false },
    { title: "hi", isCompleted: true },
    { title: "yo", isCompleted: true },
  ]);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <TaskForm />
        </>
      }
      //   ListFooterComponent={}
      //   contentContainerStyle={{ padding: 20 }}
      //   Flatlist est scrollview + évolué et optimisé pour les longues listes
      //    il necessite une data (tableau de données) et une fonction renderItem (pour rendre chaque élément)
      //    mais aussi une keyExtractor pour donner une clé unique à chaque élément (ici on utilise l'index)
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <TaskTile task={item} />}
    />
  );
}
