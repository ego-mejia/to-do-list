// import logo from "./platzi.webp";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";
import React from "react";
import "./App.css";

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
  // const [todos, setTodos] = useLocalStorage("TODOS_V1", []);
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  // console.log("Searched: " + searchValue);

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
