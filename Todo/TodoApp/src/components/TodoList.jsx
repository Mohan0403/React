import TodoItem from "./TodoItem";
import styles from "../styles/todo.module.css";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
