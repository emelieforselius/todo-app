import { useState } from "react";
import styles from "../styles/TodoPage.module.css"
import Link from "next/link";

type Todo = {
  id: number;
  text: string;
};

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = { id: Date.now(), text: inputValue };
      setTodos([newTodo, ...todos]);
      setInputValue("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo's</h1>
      <Link href="/" className={styles.backLink}>
        Back
      </Link>
      <div className={styles.inputContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className={styles.inputField}
      />
       <button className={styles.addTodoButton} onClick={addTodo}>Add</button>
      </div>
      <ul className={styles.ul}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.li}>
            {todo.text}
            <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
