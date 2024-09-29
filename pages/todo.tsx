import { useState } from "react";

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

  return (
    <div>
      <h1>Todo's</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoPage;
