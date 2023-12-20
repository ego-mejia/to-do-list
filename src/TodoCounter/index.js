import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Haz completado {completedTodos} de {totalTodos} TO-DOs
    </h1>
  );
}

export { TodoCounter };
