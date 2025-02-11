import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Keyboard,
  Vibration,
  Platform,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodoContext } from '../context/TodoContext';

const schema = z.object({
  task: z.string()
    .min(3, 'Task must be at least 3 characters long')
    .max(50, 'Task must not exceed 50 characters'),
});

type FormData = z.infer<typeof schema>;

export const TodoForm: React.FC = () => {
  const { addTodo } = useTodoContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const result = addTodo(data.task);
    
    if (!result.success) {
      Alert.alert(
        "Error",
        result.error || "Failed to add task",
        [{ text: "OK" }]
      );
    } else {
      Vibration.vibrate(50);
      reset();
      Keyboard.dismiss();
    }
    
    setIsSubmitting(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB'
      }}
    >
      <View style={{ gap: 12 }}>
        <Controller
          control={control}
          name="task"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={{
                backgroundColor: '#F9FAFB',
                padding: 16,
                borderRadius: 12,
                fontSize: 16,
                borderWidth: 1,
                borderColor: '#E5E7EB'
              }}
              placeholder="Add a new task..."
              placeholderTextColor="#9CA3AF"
              value={value}
              onChangeText={onChange}
              returnKeyType="done"
            />
          )}
        />
        {errors.task && (
          <Text style={{ color: '#EF4444', fontSize: 14, marginLeft: 4 }}>
            {errors.task.message}
          </Text>
        )}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            backgroundColor: '#3B82F6',
            padding: 16,
            borderRadius: 12,
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 2
          }}
          activeOpacity={0.8}
        >
          <Text style={{ 
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold'
          }}>
            {isSubmitting ? 'Adding...' : 'Add Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}; 