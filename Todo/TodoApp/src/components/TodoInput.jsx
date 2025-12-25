import { useState } from "react";
import styles from "../styles/todo.module.css";

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={submitHandler} className={styles.inputBox}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoInput;
