import styles from "../styles/todo.module.css";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`${styles.item} ${todo.completed ? styles.done : ""}`}>
      <span onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>✕</button>
    </div>
  );
};

export default TodoItem;
