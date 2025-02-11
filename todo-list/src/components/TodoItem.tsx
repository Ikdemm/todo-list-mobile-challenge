import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useTodo } from '../context/TodoContext';
import type { Todo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, removeTodo } = useTodo();

  const handleDelete = () => {
    Alert.alert(
      'Supprimer la tâche',
      `Êtes-vous sûr de vouloir supprimer "${todo.title}" ?`,
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Supprimer',
          onPress: () => {
            removeTodo(todo.id);
            // Optionnel : Afficher un message de confirmation après la suppression
            Alert.alert('Succès', 'La tâche a été supprimée avec succès');
          },
          style: 'destructive', // Affiche le bouton en rouge sur iOS
        },
      ],
      { cancelable: true } // Permet de fermer l'alerte en cliquant en dehors
    );
  };

  return (
    <View style={[styles.container, todo.completed && styles.completedContainer]}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => toggleTodo(todo.id)}
      >
        {todo.completed && <View style={styles.checkmark} />}
      </TouchableOpacity>
      
      <Text style={[styles.title, todo.completed && styles.completedTitle]}>
        {todo.title}
      </Text>
      
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDelete}
      >
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  completedContainer: {
    backgroundColor: '#F3F4F6',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#3B82F6',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 14,
    height: 14,
    backgroundColor: '#3B82F6',
    borderRadius: 3,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#EF4444',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -2,
  },
});
