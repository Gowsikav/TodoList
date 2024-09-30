import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputform}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          placeholder="Enter list"
          value={todo.name}
        />
        <button className={styles.buttonSubmit} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
