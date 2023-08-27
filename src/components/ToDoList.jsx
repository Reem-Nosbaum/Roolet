import "../style/App.css";
import "../style/ToDoList.css";
import { todos } from "../services/dummyData";
import ToDoCard from "./ToDoCard";

export default function ToDoList() {
  return (
    <div className="wrapper">
      <div className="welcom">Todey!</div>
      <div className="todos">
        {todos.map((todo) => (
          <ToDoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
