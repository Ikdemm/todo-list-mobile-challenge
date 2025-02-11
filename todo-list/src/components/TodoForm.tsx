import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodo } from '../context/TodoContext';

// Enhanced schema with more validation rules
const schema = z.object({
  title: z
    .string()
    .min(1, 'Le titre est requis')
    .min(3, 'Le titre doit contenir au moins 3 caractères')
    .max(50, 'Le titre ne doit pas dépasser 50 caractères')
    .trim(),
});

type FormData = z.infer<typeof schema>;

export function TodoForm() {
  const { addTodo } = useTodo();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    addTodo(data.title.trim());
    reset();
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <View style={styles.formGroup}>
            <TextInput
              style={[styles.input, errors.title && styles.inputError]}
              placeholder="Nouvelle tâche..."
              placeholderTextColor="#9CA3AF"
              value={value}
              onChangeText={onChange}
            />
            {errors.title && (
              <Text style={styles.errorText}>{errors.title.message}</Text>
            )}
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  formGroup: {
    flex: 1,
  },
  input: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#1F2937',
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  button: {
    backgroundColor: '#3B82F6',
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
