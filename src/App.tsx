import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { TodoProvider } from './context/TodoContext';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { TaskCounter } from './components/TaskCounter';

export default function App() {
  return (
    <TodoProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F2F5' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={{ 
          backgroundColor: '#FFFFFF',
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 3,
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: '#EFF6FF',
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 16,
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#BFDBFE'
          }}>
            <Text style={{ 
              fontSize: 28,
              fontWeight: 'bold',
              color: '#2563EB',
              textAlign: 'center',
              letterSpacing: 1
            }}>
              My Tasks
            </Text>
          </View>
          <TaskCounter />
        </View>
        <TodoForm />
        <TodoList />
      </SafeAreaView>
    </TodoProvider>
  );
} 