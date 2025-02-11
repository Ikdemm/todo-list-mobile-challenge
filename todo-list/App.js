import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { TodoProvider } from './src/context/TodoContext';
import { TodoForm } from './src/components/TodoForm';
import { TodoList } from './src/components/TodoList';

export default function App() {
  return (
    <TodoProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TodoForm />
          <TodoList />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
});
