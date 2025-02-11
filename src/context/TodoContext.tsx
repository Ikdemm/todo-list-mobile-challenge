import React, { createContext, useContext, useState, useCallback } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => { success: boolean; error?: string };
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  modifyTodo: (id: string, newText: string) => { success: boolean; error?: string };
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    // Vérifier si la tâche existe déjà
    const taskExists = todos.some(todo => 
      todo.text.toLowerCase() === text.toLowerCase()
    );

    if (taskExists) {
      return { 
        success: false, 
        error: 'This task already exists!' 
      };
    }

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      text,
      completed: false,
    }]);

    return { success: true };
  }, [todos]);

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const modifyTodo = useCallback((id: string, newText: string) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  }, []);

  return (
    <TodoContext.Provider value={{ 
      todos, 
      addTodo, 
      toggleTodo, 
      deleteTodo,
      modifyTodo 
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}; 