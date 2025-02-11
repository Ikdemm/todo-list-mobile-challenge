import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EditTaskModal } from './EditTaskModal';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onModify: (id: string, newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  onModify,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <View style={{ 
        marginHorizontal: 15,
        marginVertical: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2
      }}>
        <TouchableOpacity 
          onPress={() => onToggle(id)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
          }}
          activeOpacity={0.7}
        >
          <View style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: completed ? '#3B82F6' : '#D1D5DB',
            backgroundColor: completed ? '#3B82F6' : 'transparent',
            marginRight: 12,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {completed && (
              <Text style={{ color: '#FFFFFF', fontSize: 14 }}>✓</Text>
            )}
          </View>
          <Text style={{
            flex: 1,
            fontSize: 16,
            color: completed ? '#9CA3AF' : '#1F2937',
            textDecorationLine: completed ? 'line-through' : 'none'
          }}>
            {text}
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity 
              onPress={() => setIsEditing(true)}
              style={{
                backgroundColor: '#E0F2FE',
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8
              }}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={{ color: '#0284C7', fontWeight: '600' }}>
                Modify
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => onDelete(id)}
              style={{
                backgroundColor: '#FEE2E2',
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8
              }}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={{ color: '#EF4444', fontWeight: '600' }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      <EditTaskModal
        visible={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={(newText) => {
          onModify(id, newText);
          setIsEditing(false);
        }}
        currentText={text}
      />
    </>
  );
}; 