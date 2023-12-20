// import logo from "./platzi.webp";
import { AppUI } from "./AppUI";
import React from "react";
import "./App.css";
import { TodoContext, TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: "Save the World", completed: true },
//   { text: "Be awesome", completed: true },
//   { text: "Build a company", completed: false },
//   { text: "Become millionare", completed: false },
//   { text: "Buy a Bugatti", completed: true },
//   { text: "Invest in Crypto", completed: true },
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1')
// JSON.stringify(defaultTodos)
// JSON.parse(defaultTodos)

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
