import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import "./App.css";

const defaultTodos = [
  { text: "Save the World", completed: true },
  { text: "Be awesome", completed: true },
  { text: "Build a company", completed: false },
  { text: "Become millionare", completed: false },
  { text: "Buy a Bugatti", completed: true },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
