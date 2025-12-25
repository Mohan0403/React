import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "../styles/todo.module.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <h1 className={styles.title}>Focus Todo</h1>
        <p className={styles.subtitle}>
          Organize your work. Reduce mental load.
        </p>

        <TodoInput onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <div className={styles.footer}>
          {todos.filter(t => t.completed).length} / {todos.length} completed
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
