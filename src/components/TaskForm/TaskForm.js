import { View, Text, TextInput, Button, Pressable } from "react-native";
import { s } from "./TaskForm.style";
import { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState();

  function handleInput(text) {
    setTitle(text);
  }

  return (
    <View style={s.container}>
      <TextInput
        placeholder="Nouvelle tâche"
        onChange={handleInput}
        value={title}
        style={s.input}
      />
      <Pressable
        onPress={() => {}}
        style={s.btn}
      >
        <Text style={s.textBtn}>Ajouter</Text>
      </Pressable>
    </View>
  );
}
