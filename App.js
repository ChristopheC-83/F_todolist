import { View , Text} from 'react-native';
import {s} from './App.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TasksScreen from './src/screens/TasksScreen/TasksScreen';

export default function App() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ddd" }}>
          <TasksScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    );
};