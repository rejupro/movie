import { useReducer } from "react";
import { TaskContext, TaskDispatchContext } from "../Contexts/taskContexts.js";
import { tasksReducer } from "../Reducer/tasksReducer.js";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";

export default function Accordion() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // function handleAddTask(text) {
  //   dispatch({
  //     type: "added",
  //     id: nextId++,
  //     text: text,
  //   });
  // }

  // function handleChangeTask(task) {
  //   dispatch({
  //     type: "changed",
  //     task: task,
  //   });
  // }

  // function handleDeleteTask(taskId) {
  //   dispatch({
  //     type: "deleted",
  //     id: taskId,
  //   });
  // }

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
