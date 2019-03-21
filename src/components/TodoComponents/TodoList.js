// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <h4>Todo List</h4>
      <ul>
        {props.todos.map((task, i) => {
          return (
            <Todo key={i} taskItem={task} completeTask={props.completeTask} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
