import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTodoContext } from '../context/TodoContext';

export const TaskCounter: React.FC = () => {
  const { todos } = useTodoContext();
  const completedTasks = todos.filter(todo => todo.completed).length;
  const totalTasks = todos.length;

  return (
    <View style={styles.container}>
      <View style={styles.totalCard}>
        <Text style={styles.numberText}>
          {totalTasks}
        </Text>
        <Text style={styles.labelText}>
          TOTAL
        </Text>
      </View>

      <View style={styles.completedCard}>
        <Text style={styles.completedNumber}>
          {completedTasks}
        </Text>
        <Text style={styles.completedLabel}>
          COMPLETED
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 12,
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1
  },
  totalCard: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    alignItems: 'center'
  },
  completedCard: {
    flex: 1,
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    alignItems: 'center'
  },
  numberText: {
    color: '#2563EB',
    fontWeight: '700',
    fontSize: 18
  },
  labelText: {
    color: '#3B82F6',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 2
  },
  completedNumber: {
    color: '#059669',
    fontWeight: '700',
    fontSize: 18
  },
  completedLabel: {
    color: '#10B981',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 2
  }
}); 