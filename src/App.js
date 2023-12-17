import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
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
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  // console.log("Searched: " + searchValue);
  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));

    setTodos(newTodos);
  };

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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList searchValue={searchValue} setSearchValue={setSearchValue}>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
