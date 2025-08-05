import "./styles.css";
import SimpleButton from "./components/SimpleButton";
import { ToDoList } from "./components/ToDoList";
import { ToDoListv2 } from "./components/ToDoListv2";

export default function App() {
  return (
    <div className="App">
      <ToDoListv2 />
    </div>
  );
}
