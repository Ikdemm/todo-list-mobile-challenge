import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { TodoProvider } from './src/context/TodoContext';
import { TodoForm } from './src/components/TodoForm';
import { TodoList } from './src/components/TodoList';
import { TodoStats } from './src/components/TodoStats';

export default function App() {
  return (
    <TodoProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Mes Tâches</Text>
          <TodoStats />
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
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingTop: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 24,
  },
});
