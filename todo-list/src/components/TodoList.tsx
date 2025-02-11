import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { todos } = useTodo();

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem todo={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    fontStyle: 'italic',
  },
});
