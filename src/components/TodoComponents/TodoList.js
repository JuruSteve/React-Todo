// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      <h3>Todo List</h3>
      <ul>
        {props.todos.map((task, i) => {
          return (
            <Todo
              key={i}
              taskItem={task ? task : "Please Enter A Task"}
              completeTask={props.completeTask}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
