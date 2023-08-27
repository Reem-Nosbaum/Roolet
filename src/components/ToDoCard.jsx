import "../style/App.css";

import "../style/ToDoList.css";
export default function ToDoCard({ todo }) {
  return (
    <div className="todoCard">
      <input className="checkbox" type="checkbox" />
      {todo.title} <br />
    </div>
  );
}
