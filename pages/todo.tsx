import { useState } from "react";


const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Todo's</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
    </div>
  );
};

export default TodoPage;
