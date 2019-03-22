import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <li
      className={`task${props.taskItem.completed ? " completed" : ""}`}
      onClick={() => props.completeTask(props.taskItem.id)}
    >
      {props.taskItem.task}
    </li>
  );
};

export default Todo;
