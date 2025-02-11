import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodo } from '../context/TodoContext';
import type { Todo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, removeTodo } = useTodo();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTodo(todo.id)}
      >
        {todo.completed && <View style={styles.checked} />}
      </TouchableOpacity>
      <Text style={[styles.title, todo.completed && styles.completedTitle]}>
        {todo.title}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeTodo(todo.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#007AFF',
    borderRadius: 2,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    color: 'red',
  },
});
