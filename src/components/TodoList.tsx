import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { TodoItem } from './TodoItem';
import { useTodoContext } from '../context/TodoContext';

export const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo, modifyTodo } = useTodoContext();

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F2F5' }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onModify={modifyTodo}
          />
        )}
        ListEmptyComponent={() => (
          <View style={{ 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: 32 
          }}>
            <Text style={{ 
              color: '#6B7280', 
              fontSize: 16, 
              textAlign: 'center' 
            }}>
              No tasks yet. Add your first task!
            </Text>
          </View>
        )}
        contentContainerStyle={{ 
          paddingVertical: 16,
          flexGrow: 1
        }}
      />
    </View>
  );
}; 