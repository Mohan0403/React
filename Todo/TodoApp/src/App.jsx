import { useState } from "react";
import styles from "./Todo.module.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, done: false }
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map(t =>
        t.id === id ? { ...t, text: editingText } : t
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <h1 className={styles.title}>Todo App</h1>
        <p className={styles.subtitle}>Plan smarter. Stay calm.</p>

        {/* Input */}
        <div className={styles.inputBox}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
          />
          <button onClick={addTodo}>Add</button>
        </div>

        {/* Todo List */}
        <div className={styles.list}>
          {todos.map(todo => (
            <div
              key={todo.id}
              className={`${styles.item} ${todo.done ? styles.done : ""}`}
            >
              {editingId === todo.id ? (
                <>
                  <input
                    className={styles.editInput}
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button
                    className={styles.saveBtn}
                    onClick={() => saveEdit(todo.id)}
                  >
                    ✔
                  </button>
                </>
              ) : (
                <>
                  <span onClick={() => toggleTodo(todo.id)}>
                    {todo.text}
                  </span>
                  <div className={styles.actions}>
                    <button
                      className={styles.editBtn}
                      onClick={() => startEdit(todo)}
                    >
                      ✎
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      ✕
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          {todos.filter(t => t.done).length} / {todos.length} completed
        </div>
      </div>
    </div>
  );
}
