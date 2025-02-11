import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTodo } from '../context/TodoContext';

export function TodoStats() {
  const { todos } = useTodo();

  const stats = {
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    pending: todos.filter(todo => !todo.completed).length,
    completionRate: todos.length > 0 
      ? Math.round((todos.filter(todo => todo.completed).length / todos.length) * 100)
      : 0
  };

  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>{stats.total}</Text>
        <Text style={styles.statLabel}>Total</Text>
      </View>
      
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, { color: '#4CAF50' }]}>{stats.completed}</Text>
        <Text style={styles.statLabel}>Terminées</Text>
      </View>
      
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, { color: '#FF9800' }]}>{stats.pending}</Text>
        <Text style={styles.statLabel}>En cours</Text>
      </View>
      
      <View style={styles.statItem}>
        <Text style={[styles.statNumber, { color: '#2196F3' }]}>{stats.completionRate}%</Text>
        <Text style={styles.statLabel}>Complété</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
}); 